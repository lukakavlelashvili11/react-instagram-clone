<?php

namespace App\Domains\Likes\Controllers;

use App\Domains\Likes\Repositories\LikeRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    private $likeRepository;

    public function __construct(LikeRepository $likeRepository){
        $this->likeRepository = $likeRepository;
    }

    public function store(Request $request){
        $data = $this->likeRepository->store($request->only('user_id','post_id'));
        return response()->json($data);
    }

    public function delete(Request $request){
        $data = $this->likeRepository->delete($request->only('user_id','post_id'));
        return response()->json($data);
    }
}
