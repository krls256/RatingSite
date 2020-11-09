<?php


namespace App\Services;


use App\Repositories\Companies\UpdateServireCompanyRepository;


class UpdateDBService
{
    private $ratingCompaniesRepository;
    private $mainCompanyId;
    private $cheatCoefficient;

    public function __construct(UpdateServireCompanyRepository $repository)
    {
        $this->repository = $repository;
        $this->mainCompanyId = $repository->getMainCompaniesId();

        $this->cheatCoefficient = $repository
                ->getCompanyAverageMark($this->mainCompanyId) / 5;
    }

    public function updateCompanyReviewData(int $company_id)
    {
        if ($this->mainCompanyId === $company_id)
        {
            $coefficient = 1;
        } else
        {
            $coefficient = $this->cheatCoefficient;
        }

        $dbItem = $this->repository->getUpdateAverageValues($company_id);
        $generalAverage = $this->repository->getCompanyAverageMark($company_id) * $coefficient;
        $generalReviews = $this->repository->getCompanyReviewCount($company_id);

        $yandexAverage = $this->repository->getCompanyAverageMark($company_id, 0) * $coefficient;
        $yandexReviews = $this->repository->getCompanyReviewCount($company_id, 0);

        $googleAverage = $this->repository->getCompanyAverageMark($company_id, 1) * $coefficient;
        $googleReviews = $this->repository->getCompanyReviewCount($company_id, 1);


        $otzovickAverage = $this->repository->getCompanyAverageMark($company_id, 2) * $coefficient;
        $otzovickReviews = $this->repository->getCompanyReviewCount($company_id, 2);

        $yellAverage = $this->repository->getCompanyAverageMark($company_id, 3) * $coefficient;
        $yellReviews = $this->repository->getCompanyReviewCount($company_id, 3);

        $flampAverage = $this->repository->getCompanyAverageMark($company_id, 4) * $coefficient;
        $flampReviews = $this->repository->getCompanyReviewCount($company_id, 4);

        $positive = $this->repository->getPositiveQuantity($company_id);

        $update = [
            'company_average_mark' => $generalAverage,
            'company_average_mark_yandex' => $yandexAverage,
            'company_average_mark_google' => $googleAverage,
            'company_average_mark_otzovick' => $otzovickAverage,
            'company_average_mark_yell' => $yellAverage,
            'company_average_mark_flamp' => $flampAverage,

            'company_quantity_review' => $generalReviews,
            'company_quantity_review_yandex' => $yandexReviews,
            'company_quantity_review_google' => $googleReviews,
            'company_quantity_review_otzovick' => $otzovickReviews,
            'company_quantity_review_yell' => $yellReviews,
            'company_quantity_review_flamp' => $flampReviews,


            'company_positive' => $positive,
            'company_negative' => $generalReviews - $positive,
            'company_mark_difference' => 2 * $positive - $generalReviews,
        ];
        $result = $dbItem->fill($update)
            ->save();
        return $result;
    }
}
