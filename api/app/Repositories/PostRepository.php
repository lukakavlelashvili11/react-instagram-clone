<?php
namespace App\Repositories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;

class PostRepository{

    private $post;

    public function __construct(Post $post){
        $this->post = $post;
    }

    public function get(): Collection{
        return $this->post->with([
            'user',
            'comment' => function($q){
                $q->with('user')->latest('created_at');
            }
        ])
        ->latest('created_at')->get();
    }

    public function store(array $postData): void{
        $this->post->create($postData);
    }
}