<?php

use App\Repositories\OtherActionsReviewsRepository;
use App\Repositories\SelectCompaniesRepository;
use App\Services\FindCompanyIdService;
use App\Services\PrepareReviewDataFromSeederService;
use Illuminate\Database\Seeder;

class ReviewsSeeder extends Seeder
{

    // Service variables

    private $step = 300;

    // Data variable

    private $companies;
    private $reviewsRepository;
    private $reviews;
    private $prepareService;
    private $findCompanyIdService;


    public function __construct(SelectCompaniesRepository $selectCompaniesRepository,
        OtherActionsReviewsRepository $reviewsRepository,
        PrepareReviewDataFromSeederService $preparerService,
        FindCompanyIdService $findCompanyIdService)
    {
        $this->reviews = collect(json_decode(file_get_contents('./resources/files-for-db/reviews.json')));
        $this->companies = $selectCompaniesRepository->getCompaniesWithSourceIds();
        $this->reviewsRepository = $reviewsRepository;
        $this->prepareService = $preparerService;
        $this->findCompanyIdService = $findCompanyIdService;
    }

    public function run()
    {
        for($cycle = 0; $cycle*$this->step < $this->reviews->count(); $cycle++) {
            $reviewPack = [];
            for($subcycle = $cycle*$this->step; $subcycle < min($this->reviews->count(), ($cycle+1)*$this->step);
                $subcycle++) {
                $item = $this->reviews[$subcycle];
                $id = $item->base_url;
                $source_id = $item->source_id;
                $company_id = $this->findCompanyIdService->find($this->companies, $id, $source_id);
                $reviewPack[] = $this->prepareService->prepare($item, $company_id);
            }
            $this->reviewsRepository->insertNewReviews($reviewPack);
        }
    }
}
