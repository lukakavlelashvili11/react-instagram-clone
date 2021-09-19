<?php

namespace App\Http\Controllers;

use App\Repositories\CommentRepository;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    private $commentRepository;

    public function __construct(CommentRepository $commentRepository){
        $this->commentRepository = $commentRepository;
    }

    public function store(Request $request){
        $this->commentRepository->store([
            'text' => $request->text,
            'post_id' => $request->post_id,
            'user_id' => $request->user_id
        ]);
    }
}
