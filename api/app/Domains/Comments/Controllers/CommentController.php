<?php

namespace App\Domains\Comments\Controllers;

use App\Domains\Comments\Repositories\CommentRepository;
use App\Domains\Posts\Repositories\PostRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    private $commentRepository;

    public function __construct(CommentRepository $commentRepository){
        $this->commentRepository = $commentRepository;
    }

    public function store(Request $request){
        $this->commentRepository->store($request->only('text','post_id','user_id'));
        return $this->getUpdatedPost($request->post_id);
    }

    public function getUpdatedPost(int $id){
        return response()->json(app(PostRepository::class)->getUpdatedPostWithId($id));
    }
}
