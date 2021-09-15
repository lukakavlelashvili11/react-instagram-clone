<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function logIn(Request $request){
        if(Auth::check())
            Auth::logout();
        else
            Auth::attempt($request->only('email','password'));
    }
}
