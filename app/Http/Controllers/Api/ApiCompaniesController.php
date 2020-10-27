<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\CompaniesApiRequest;
use App\Repositories\ApiCompanyRepository;
use Illuminate\Http\Request;

class ApiCompaniesController extends ApiController
{
    private $companyRepository;

    public function __construct(ApiCompanyRepository $apiCompanyRepository)
    {
        $this->companyRepository = $apiCompanyRepository;
    }

    public function index(CompaniesApiRequest $request)
    {
        $page = $request->get('page');

        return $this->companyRepository->getCompaniesPaginate(15);
    }


    public function store(Request $request)
    {
        //
    }

    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }

}
