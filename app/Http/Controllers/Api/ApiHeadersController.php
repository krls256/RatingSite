<?php

namespace App\Http\Controllers\Api;


use App\Http\Requests\Headers\ApiHeadersUpdateRequest;
use App\Repositories\Headers\ApiHeadersRepository;
use Illuminate\Http\Request;

class ApiHeadersController extends ApiController
{
    private $repository;

    public function __construct(ApiHeadersRepository $headersRepository)
    {
        parent::__construct();
        $this->repository = $headersRepository;
    }

    public function index()
    {
        return $this->repository->getHeadersPaginate();
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
