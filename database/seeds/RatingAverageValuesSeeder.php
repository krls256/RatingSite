<?php

use Illuminate\Database\Seeder;
use App\Services\UpdateDBService;
use App\Repositories\RatingCompanies\UpdateServireCompanyRepository;

class RatingAverageValuesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param UpdateDBService $updateDBService
     * @return void
     */
    public function run(UpdateDBService $updateDBService, UpdateServireCompanyRepository $repository)
    {
        $ids = $repository->getCompaniesIds();
        $ids->each(function ($item) use ($updateDBService) {
            $updateDBService->updateCompanyReviewData($item->company_id);
        });

    }
}
