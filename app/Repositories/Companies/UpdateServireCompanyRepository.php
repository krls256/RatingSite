<?php


namespace App\Repositories\Companies;

use App\Models\Companies as Model;
use App\Repositories\CoreRepository;


class UpdateServireCompanyRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getMainCompaniesId()
    {
        $search = 'Студия Ремонтов';
        $column = ['company_id'];
        $response = $this->startCondition()
            ->select($column)
            ->where('company_name', $search)
            ->first()->company_id;
        return $response;
    }

    public function getCompanyAverageMark($id, $sourceId = null)
    {
        $response = $this->getCompanyWithReviews($id, $sourceId)->reviews->avg('review_mark');
        return round($response, 2);
    }

    public function getCompanyReviewCount($id, $sourceId = null)
    {
        $response = $this->getCompanyWithReviews($id, $sourceId)->reviews->count();
        return $response;
    }

    public function getUpdateAverageValues($id)
    {
        return $this->startCondition()
            ->where('company_id', $id)
            ->first();
    }

    public function getPositiveQuantity($id)
    {
        $response = $this->getCompanyWithReviews($id)
            ->reviews
            ->whereIn('review_mark', [4, 5])
            ->count();
        return $response;
    }

    public function getCompaniesIds()
    {
        $response = $this->startCondition()
            ->select('company_id')
            ->toBase()
            ->get();
        return $response;
    }

    private function getCompanyWithReviews($id, $sourceId = null)
    {
        $column = ['company_id'];
        $response =
            $this->startCondition()
                ->select($column)
                ->where('company_id', $id)
                ->with(['reviews' => function ($query) use ($sourceId)
                {
                    if ($sourceId === null)
                    {
                        $query->select('review_id', 'review_mark', 'company_id')
                            ->where('is_published', '=', 1);
                    } else
                    {
                        $query->select('review_id', 'review_mark', 'company_id')
                            ->where('source_id', '=', $sourceId)
                            ->where('is_published', '=', 1);
                    }

                }])
                ->first();
        return $response;
    }
}
