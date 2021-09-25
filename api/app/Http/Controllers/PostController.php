<?php

namespace App\Http\Controllers;

use App\Repositories\PostRepository;
use Illuminate\Http\Request;

class PostController extends Controller
{
    private $postRepository;

    public function __construct(PostRepository $postRepository){
        $this->postRepository = $postRepository;
    }

    public function get(){
        $data = $this->postRepository->get();
        return response()->json($data);
    }

    public function store(Request $request): void{
        // $this->postRepository->store([...$request->only('')]);
        if($request->file()){
            $file_name_for_front = $this->storeImage($request);
            $this->postRepository->store([
                'user_id' => 2,
                'text' => $request->text,
                'imageurl' => $file_name_for_front
            ]);
        }
    }

    public function delete(Request $request): void{
        $this->postRepository->delete($request->only('user_id','id'));
    }

    public function storeImage($request): string{
        $file_name = time().'_'.$request->image->getClientOriginalName();
        $request->file('image')->storeAs('uploads/2',$file_name,'public');
        return asset('storage/uploads/2/'.$file_name);
    }
}
