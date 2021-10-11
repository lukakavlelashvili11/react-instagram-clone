<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    private $userRepository;

    public function __construct(UserRepository $userRepository){
        $this->userRepository = $userRepository;
    }

    public function storePicture(Request $request): void{
        if($request->file()){
            $file_name_for_front = $this->storeImage($request);
            User::where('id',auth()->user()->id)->update(['profile_pic' => $file_name_for_front]);
        }
    }

    public function storeImage($request): string{
        $file_name = time().'_'.$request->profile_pic->getClientOriginalName();
        $request->file('profile_pic')->storeAs('uploads/'.auth()->user()->id.'/profile',$file_name,'public');
        return asset('storage/uploads/'.auth()->user()->id.'/profile/'.$file_name);
    }

    public function search(Request $request){
        //without repository for speed
        return DB::table('users')->where([
            ['username','like','%'.$request->term.'%'],
            ['fullname','like','%'.$request->term.'%']
        ])->get();
    }

    public function getUserById(Request $request){
        $data = $this->userRepository->getUserById($request);
        return response()->json($data);
    }
}
