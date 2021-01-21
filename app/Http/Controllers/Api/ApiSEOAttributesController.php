<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\SEO\SEOUpdateRequest;
use App\Repositories\SEO\ApiSEORepository;
use Illuminate\Http\Request;

class ApiSEOAttributesController extends ApiController
{
    private $repository;

    public function __construct(ApiSEORepository $SEORepository, Request $request)
    {
        parent::__construct($request, 's_e_o_attributes');
        $this->repository = $SEORepository;
    }

    public function index()
    {
        $response = $this->repository->getSEOPaginate(15, $this->options);

        return $this->returnWithOptions($response, $this->options);
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
