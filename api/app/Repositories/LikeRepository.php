<?php
namespace App\Repositories;

use App\Models\Like;

class LikeRepository{

    protected $like;

    public function __construct(Like $like){
        $this->like = $like;
    }

    public function store(array $likeData): void{
        $this->like->create($likeData);
    }

    public function delete(array $likeData): void{
        $this->like->where($likeData)->delete();
    }
}