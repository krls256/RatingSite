<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ApiCompanyUpdateRequest;
use App\Http\Requests\CompaniesApiRequest;
use App\Repositories\Companies\ApiCompanyRepository;
use App\Services\ApiCompanyServices\DeleteStatisticFieldsService;

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


    public function edit($id)
    {
        return $this->companyRepository->getEdit($id);
    }

    public function update(ApiCompanyUpdateRequest $request, $id, DeleteStatisticFieldsService $service)
    {   $safeData = $service->clear($request->all());
        $company = $this->companyRepository->getUpdate($id);
        if (!$company)
        {
            abort(404);
        }
        $result = $company->update($safeData);

        return $this->updateResponse($result, $id);
    }

    public function shortList() {
        $shortList = $this->companyRepository->getShortList();
        return $shortList;
    }

}
