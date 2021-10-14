<?php

namespace App\Http\Controllers;

use App\Repositories\FollowRepository;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    private $followRepository;

    public function __construct(FollowRepository $followRepository){
        $this->followRepository = $followRepository;
    }

    public function store(Request $request){
        $this->followRepository->store([
            'follower_id' => auth()->user()->id,
            'following_id' => $request->id
        ]);
    }
}
