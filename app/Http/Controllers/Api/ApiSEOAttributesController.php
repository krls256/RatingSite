<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\SEO\SEOUpdateRequest;
use App\Repositories\SEO\ApiSEORepository;
use Illuminate\Http\Request;

class ApiSEOAttributesController extends ApiController
{
    private $repository;

    public function __construct(ApiSEORepository $SEORepository)
    {
        $this->repository = $SEORepository;
    }

    public function index()
    {
        return $this->repository->getSEOPaginate();
    }

    public function edit($id)
    {
        $seo = $this->repository->getSEOEdit($id);
        if($seo === null) {
            abort(404);
        }

        return $seo;
    }

    public function update(SEOUpdateRequest $request, $id)
    {
        $data = $request->all();

        $result = $this->repository->updateSEO($data, $id);

        return $this->updateResponse($result, $id);
    }
}
