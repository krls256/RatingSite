<?php


namespace App\Repositories\Companies;


use App\Repositories\CoreRepository;
use App\Models\Companies as Model;

class UserCompaniesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getCompaniesForRating() {
        $column = ['company_id', 'is_published', 'company_name',
            'company_slug', 'company_positive', 'company_negative',
            'company_mark_difference', 'company_average_mark', 'company_logo_link', 'company_quantity_review'];

        $response = $this->startCondition()
            ->select($column)
            ->where('is_published', 1)
            ->orderBy('company_mark_difference', 'desc')
            ->orderBy('company_average_mark', 'desc')
            ->get();

        return $response;
    }
}
