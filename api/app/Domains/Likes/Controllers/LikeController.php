<?php

namespace App\Domains\Likes\Controllers;

use App\Domains\Likes\Repositories\LikeRepository;
use App\Domains\Posts\Repositories\PostRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    private $likeRepository;

    public function __construct(LikeRepository $likeRepository){
        $this->likeRepository = $likeRepository;
    }

    public function store(Request $request){
        $this->likeRepository->store($request->only('user_id','post_id'));
        return $this->getUpdatedPost($request->post_id);
    }

    public function delete(Request $request){
        $this->likeRepository->delete($request->only('user_id','post_id'));
        return $this->getUpdatedPost($request->post_id);
    }

    public function getUpdatedPost(int $id){
        return response()->json(app(PostRepository::class)->getUpdatedPostWithId($id));
    }
}
