<?php

use App\Repositories\OtherActionsCompaniesRepository;
use App\Services\PrepareCompanyDataFromSeederService;
use Illuminate\Database\Seeder;

class CompaniesSeeder extends Seeder
{
    private $companies;
    private $companiesRepository;
    private $prepareService;
    public function __construct(OtherActionsCompaniesRepository $companiesRepository, PrepareCompanyDataFromSeederService
    $prepareService) {
         $this->companies = collect(json_decode(file_get_contents('./resources/files-for-db/companies.json')));
         $this->companiesRepository = $companiesRepository;
         $this->prepareService = $prepareService;
    }

    public function run()
    {
        $this->companies->each(function ($item) {
            $item = $this->prepareService->prepare($item);
            $this->companiesRepository->createNewCompany($item);
        });
    }
}
