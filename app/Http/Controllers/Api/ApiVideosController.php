<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ApiVideoUpdateRequest;
use App\Repositories\Videos\ApiVideoRepository;
use Illuminate\Http\Request;

class ApiVideosController extends ApiController
{
    private $repository;

    public function __construct(ApiVideoRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $videos = $this->repository->getPaginate();

        return $videos;
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

        if($result)
            return ['msg' => ['База была успешно обновлена', "Id обновленного видео равен $id"]];
        return ['msg' => ['Что-то пошло не так']];
    }
}
