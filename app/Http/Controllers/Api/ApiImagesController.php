<?php

namespace App\Http\Controllers\Api;

use App\Repositories\Images\ApiImagesRepository;
use Illuminate\Http\Request;

class ApiImagesController extends ApiController
{
    private $repository;

    public function __construct(ApiImagesRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        return $this->repository->getPaginate();
    }

    public function changeImagesState(Request $request)
    {
        dd(__METHOD__);
    }

}
