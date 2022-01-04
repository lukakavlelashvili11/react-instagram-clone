<?php

namespace App\Domains\Follows\Controllers;

use App\Domains\Follows\Repositories\FollowRepository;
use App\Http\Controllers\Controller;
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
            'user_id' => $request->id
        ]);
    }
}
