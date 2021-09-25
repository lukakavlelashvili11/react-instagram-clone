<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Route::post('/login', [UserController::class,'login']);
// Route::post('/register', 'UserController@register');
// Route::get('/logout', 'UserController@logout');


Route::get('/test',function(){
    return 'worrkss';
});

//User
Route::post('/user/store/picture',[UserController::class,'storePicture']);

Route::post('/login',[LoginController::class,'logIn']);

//post
Route::post('/post/save',[PostController::class,'store']);
Route::get('/post',[PostController::class,'get']);
Route::post('/post/delete',[PostController::class,'delete']);

Route::post('/comment/save',[CommentController::class,'store']);
Route::post('/like/save',[LikeController::class,'store']);
Route::post('/like/delete',[LikeController::class,'delete']);