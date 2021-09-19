<?php

namespace App\Http\Controllers;

use App\Repositories\LikeRepository;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    private $likeRepository;

    public function __construct(LikeRepository $likeRepository){
        $this->likeRepository = $likeRepository;
    }

    public function store(Request $request): void{
        $this->likeRepository->store($request->only('user_id','post_id'));
    }

    public function delete(Request $request): void{
        $this->likeRepository->delete($request->only('user_id','post_id'));
    }
}
