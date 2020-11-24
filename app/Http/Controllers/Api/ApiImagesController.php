<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ApiImagesChangeRequest;
use App\Repositories\Images\ApiImagesRepository;
use App\Services\ApiImagesServices\UpdateImagesService;
use Illuminate\Http\Request;

class ApiImagesController extends ApiController
{
    private $repository;

    public function __construct(ApiImagesRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        $data = $request->all();
        $company_id = $data['company_id'] ?? 0;
        $is_published = $data['is_published'] ?? null;
        $is_on_company_page = $data['is_on_company_page'] ?? null;
        return $this->repository->getPaginate(50, $company_id, $is_published, $is_on_company_page);
    }

    public function changeImagesState(ApiImagesChangeRequest $request, UpdateImagesService $service)
    {
        $data = collect($request->all()['data']);
        $result = $service->main($data);

        return ['msg' => ['База картинок была успешно обновлена']];

    }

}
