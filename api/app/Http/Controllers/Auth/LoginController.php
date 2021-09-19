<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function logIn(Request $request){
        // if(Auth::check()){
        //     return 'registered';
        // }
        // else{
        //     if(Auth::attempt($request->only('email','password'))){
        //         return 'successs';
        //     }else{
        //         throw new AuthenticationException();
        //     }
        // }
        // User::create([
        //     'name' => 'luka',
        //     'email' => "luka3@gmail.com",
        //     'password' => 'luka12345'
        // ]);
        $credentials = [
            'email' => 'luka3@gmail.com',
            'password' => 'luka12345',
        ];
        if(Auth::attempt($credentials)){
            $user = User::where('email', $request['email'])->firstOrFail();

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
            ]);
        }else{
            throw new AuthenticationException();
        }
        // return json_encode($request->email);
        // return response()->json($request->email);
        // return $request->email;
    }
}
