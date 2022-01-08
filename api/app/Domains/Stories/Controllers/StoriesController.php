<?php

namespace App\Domains\Stories\Controllers;

use App\Domains\Stories\Repositories\StoriesRepository;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StoriesController extends Controller
{
    private $storiesRepository;

    public function __construct(StoriesRepository $storiesRepository){
        $this->$storiesRepository = $storiesRepository;
    }

    public function store(){}
}
