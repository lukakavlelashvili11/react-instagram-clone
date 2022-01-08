<?php
namespace App\Domains\Posts\Repositories;

use App\Domains\Posts\Models\Post;
use Illuminate\Database\Eloquent\Collection;

class PostRepository{

    private $post;

    public function __construct(Post $post){
        $this->post = $post;
    }

    public function get(): Collection{
        return $this->post
        ->with([
            'user',
            'comments' => function($q){
                $q->with('user')->latest('created_at');
            },
            'likes' => function($q){
                $q->with('user')->latest('created_at');
            }
        ])
        ->latest('created_at')->get();
    }

    public function getUpdatedPostWithId(int $id){
        return $this->post
        ->with([
            'user',
            'comments' => function($q){
                $q->with('user')->latest('created_at');
            },
            'likes' => function($q){
                $q->with('user')->latest('created_at');
            }
        ])
        ->where('id',$id)
        ->firstOrFail();
    }

    public function getNewPost(){
        return $this->post
        ->with([
            'user',
            'comments' => function($q){
                $q->with('user')->latest('created_at');
            },
            'likes' => function($q){
                $q->with('user')->latest('created_at');
            }
        ])
        ->where('user_id',auth()->user()->id)
        ->latest('created_at')
        ->first();
    }

    public function store(array $postData): void{
        $this->post->create($postData);
    }

    public function delete(array $postData): void{
        $this->post->where($postData)->delete();
    }
}