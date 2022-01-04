<?php
namespace App\Domains\Comments\Repositories;

use App\Domains\Comments\Models\Comment;

class CommentRepository{

    private $comment;

    public function __construct(Comment $comment){
        $this->comment = $comment;
    }

    public function store(array $commentData): void{
        $this->comment->create($commentData);
    }
}