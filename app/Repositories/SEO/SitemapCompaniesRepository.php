<?php


namespace App\Repositories\SEO;


use App\Models\Companies as Model;
use App\Repositories\CoreRepository;

class SitemapCompaniesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getAllCompanies()
    {
        $column = ['company_id', 'company_slug', 'updated_at'];
        $result = $this->startCondition()
            ->select($column)
            ->orderBy('company_id', 'desc')
            ->get();

        return $result;
    }
}
