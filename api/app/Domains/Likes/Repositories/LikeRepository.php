<?php
namespace App\Domains\Likes\Repositories;

use App\Domains\Likes\Models\Like;
use App\Domains\Posts\Models\Post;
use App\Domains\Posts\Repositories\PostRepository;

class LikeRepository{

    protected $like;

    public function __construct(Like $like){
        $this->like = $like;
    }

    public function store(array $likeData): Post{
        $this->like->create($likeData);
        return app(PostRepository::class)->getUpdatedPostWithId($likeData['post_id']);
    }

    public function delete(array $likeData): Post{
        $this->like->where($likeData)->delete();
        return app(PostRepository::class)->getUpdatedPostWithId($likeData['post_id']);
    }
}