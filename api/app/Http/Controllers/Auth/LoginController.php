<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LogInValidator;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function logIn(LogInValidator $request){
        if(!Auth::attempt($request->only('email','password'))){
            throw new AuthenticationException();
        }
    }
}
