<?php
namespace App\Domains\Follows\Repositories;

use App\Domains\Follows\Models\Follow;

class FollowRepository{

    private $follow;

    public function __construct(Follow $follow){
        $this->follow = $follow;
    }

    public function store(array $followData){
        $this->follow->create($followData);
    }
}