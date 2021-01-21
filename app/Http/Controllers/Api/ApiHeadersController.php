<?php

namespace App\Http\Controllers\Api;


use App\Http\Requests\Headers\ApiHeadersUpdateRequest;
use App\Repositories\Headers\ApiHeadersRepository;
use Illuminate\Http\Request;

class ApiHeadersController extends ApiController
{
    private $repository;

    public function __construct(ApiHeadersRepository $headersRepository, Request $request)
    {
        parent::__construct($request, 'headers');
        $this->repository = $headersRepository;
    }

    public function index()
    {
        $response = $this->repository->getHeadersPaginate(15, $this->options);

        return $this->returnWithOptions($response, $this->options);
    }

    public function edit($id)
    {
        $result = $this->repository->getHeaderEdit($id);
        if($result === null) {
            abort(404);
        }

        return $result;
    }

    public function update(ApiHeadersUpdateRequest $request, $id)
    {
        $data = $request->all();

        $result = $this->repository->updateHeader($data, $id);

        return $this->updateResponse($result, $id);
    }
}
