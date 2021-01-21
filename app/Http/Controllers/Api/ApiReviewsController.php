<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ApiReviewUpdateRequest;
use App\Repositories\Reviews\ApiReviewsRepository;
use Illuminate\Http\Request;

class ApiReviewsController extends ApiController
{
    private $repository;

    public function __construct(ApiReviewsRepository $repository, Request $request)
    {
        parent::__construct($request, 'reviews');
        $this->repository = $repository;
    }

    public function index()
    {
        $response = $this->repository->getReviewsPaginate(50, $this->options);

        return $this->returnWithOptions($response, $this->options);
    }

    public function edit($id)
    {
        $response = $this->repository->getEdit($id);
        if ($response === null)
        {
            abort(404);
        }
        return $response;
    }

    public function update(ApiReviewUpdateRequest $request, $id)
    {
        $response = $this->repository->getEdit($id);
        if ($response === null)
        {
            abort(404);
        }

        $result = $response->update($request->all());

        return $this->updateResponse($result, $id);
    }
}
