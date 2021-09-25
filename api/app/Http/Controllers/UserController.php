<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
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
}
