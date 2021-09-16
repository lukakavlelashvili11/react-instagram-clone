<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function logIn(Request $request){
        if(Auth::check()){
            return 'registered';
        }
        else{
            if(Auth::attempt($request->only('email','password'))){
                return 'successs';
            }else{
                throw new AuthenticationException();
            }
        }
        // return json_encode($request->email);
        // return response()->json($request->email);
        // return $request->only('email','password');
    }
}
