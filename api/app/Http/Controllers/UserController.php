<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function storePicture(Request $request){
        if($request->file()){
            $file_name_for_front = $this->storeImage($request);
            User::where('id',2)->update(['profile_pic' => $file_name_for_front]);
        }
    }

    public function storeImage($request){
        $file_name = time().'_'.$request->profile_pic->getClientOriginalName();
        $request->file('profile_pic')->storeAs('uploads/2/profile',$file_name,'public');
        return asset('storage/uploads/2/profile/'.$file_name);
    }
}
