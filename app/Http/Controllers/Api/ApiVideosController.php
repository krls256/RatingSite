<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ApiVideoUpdateRequest;
use App\Http\Requests\Videos\ApiVideosStoreRequest;
use App\Models\Videos;
use App\Repositories\Videos\ApiVideoRepository;
use Illuminate\Http\Request;

class ApiVideosController extends ApiController
{
    private $repository;

    public function __construct(ApiVideoRepository $repository, Request $request)
    {
        parent::__construct($request, 'videos');
        $this->repository = $repository;
    }

    public function index()
    {
        $videos = $this->repository->getPaginate(20, $this->options);

        return $this->returnWithOptions($videos, $this->options);
    }

    public function create(Videos $video)
    {
        return $video->getFillable();
    }

    public function store(ApiVideosStoreRequest $storeRequest, ApiVideoRepository $videoRepository) {
        $result = $videoRepository->createVideo($storeRequest->all());

        return $this->storeResponse($result, 'video_id');
    }

    public function edit($id)
    {
        $video = $this->repository->getEdit($id);

        return $video;
    }

    public function update(ApiVideoUpdateRequest $request, $id)
    {
        $video = $this->repository->getEdit($id);
        $data = $request->all();

        $result = $video->update($data);

        return $this->updateResponse($result, $id);
    }
}
