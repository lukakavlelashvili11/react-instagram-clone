<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserValidator;
use App\Repositories\UserRepository;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class RegisterController extends Controller
{

    private $userRepository;

    public function __construct(UserRepository $userRepository){
        $this->userRepository = $userRepository;
    }

    public function store(UserValidator $request): void{
        $this->userRepository->store([
            'username' => $request->username,
            'fullname' => $request->fullname,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        if(!Auth::attempt($request->only('email','password'))){
            throw new AuthenticationException();
        }
    }
}
