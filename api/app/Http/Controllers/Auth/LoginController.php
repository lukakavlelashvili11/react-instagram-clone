<?php

namespace App\Http\Controllers\Auth;

use App\Domains\Users\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\LogInValidator;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function logIn(LogInValidator $request): User{
        if(!Auth::attempt($request->only('email','password'))){
            throw new AuthenticationException();
        }else{
            return auth()->user();
        }
    }
}
