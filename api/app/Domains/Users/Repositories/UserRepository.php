<?php
namespace App\Domains\Users\Repositories;

use App\Domains\Users\Models\User;
use Illuminate\Http\Request;

class UserRepository{

    private $user;

    public function __construct(User $user){
        $this->user = $user;
    }

    public function store(array $userData): void{
        $this->user->create($userData);
    }

    public function getUserById(Request $request): User{
        return $this->user
        ->where('id',$request->id)
        ->with(['followers','following'])
        ->when(!!$request->post,function($q){
            $q->with(['posts' => function($q){
                $q->with(['comments' => function($q){
                    $q->with('user');
                },'likes','user'])->latest('created_at');
            }]);
        })
        ->firstOrFail();
    }
}