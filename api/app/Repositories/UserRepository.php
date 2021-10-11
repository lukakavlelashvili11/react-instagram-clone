<?php
namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
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
        ->when(!!$request->post,function($q){
            $q->with(['posts' => function($q){
                $q->with(['comments','likes'])->latest('created_at');
            }]);
        })
        ->firstOrFail();;
    }
}