<?php
namespace App\Repositories;

use App\Models\Comment;

class CommentRepository{

    private $comment;

    public function __construct(Comment $comment){
        $this->comment = $comment;
    }

    public function store(array $commentData): void{
        $this->comment->create($commentData);
    }
}