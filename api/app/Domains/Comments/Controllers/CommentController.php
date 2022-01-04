<?php

namespace App\Domains\Comments\Controllers;

use App\Domains\Comments\Repositories\CommentRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    private $commentRepository;

    public function __construct(CommentRepository $commentRepository){
        $this->commentRepository = $commentRepository;
    }

    public function store(Request $request): void{
        $this->commentRepository->store([
            'text' => $request->text,
            'post_id' => $request->post_id,
            'user_id' => $request->user_id
        ]);
    }
}
