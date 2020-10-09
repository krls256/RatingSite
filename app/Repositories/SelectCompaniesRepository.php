<?php


namespace App\Repositories;
use App\Models\Companies as Model;

class SelectCompaniesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }
    public function getCompaniesWithSourceIds() {
        $column = ['company_id', 'company_yandex_id', 'company_google_id', 'company_otzovick_id', 'company_yell_id',
            'company_flamp_id'];
        $result = $this->startCondition()->select($column)->toBase()->get();
        return $result;
    }
}
