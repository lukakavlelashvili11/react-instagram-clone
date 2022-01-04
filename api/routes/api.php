<?php

use App\Domains\Comments\Controllers\CommentController;
use App\Domains\Follows\Controllers\FollowController;
use App\Domains\Likes\Controllers\LikeController;
use App\Domains\Posts\Controllers\PostController;
use App\Domains\Users\Controllers\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogOutController;
use App\Http\Controllers\Auth\RegisterController;
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


Route::post('/register',[RegisterController::class,'store']);
Route::post('/search',[UserController::class,'search']);
//User
Route::post('/user/store/picture',[UserController::class,'storePicture']);
Route::get('/user/{id}',[UserController::class,'getUserById']);

Route::post('/login',[LoginController::class,'logIn']);
Route::post('/logout',[LogOutController::class,'logOut']);


//post
Route::post('/post/save',[PostController::class,'store']);
Route::get('/post',[PostController::class,'get']);
Route::post('/post/delete',[PostController::class,'delete']);

Route::post('/comment/save',[CommentController::class,'store']);
Route::post('/like/save',[LikeController::class,'store']);
Route::post('/like/delete',[LikeController::class,'delete']);

Route::post('/follow/save/{id}',[FollowController::class,'store']);