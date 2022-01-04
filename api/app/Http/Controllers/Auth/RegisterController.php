<?php

namespace App\Http\Controllers\Auth;

use App\Domains\Users\Models\User;
use App\Domains\Users\Repositories\UserRepository;
use App\Http\Controllers\Controller;
use App\Domains\Users\Requests\UserValidator;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{

    private $userRepository;

    public function __construct(UserRepository $userRepository){
        $this->userRepository = $userRepository;
    }

    public function store(UserValidator $request): User{
        $this->userRepository->store([
            'username' => $request->username,
            'fullname' => $request->fullname,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        if(!Auth::attempt($request->only('email','password'))){
            throw new AuthenticationException();
        }else{
            return auth()->user();
        }
    }
}
