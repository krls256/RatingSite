<?php


namespace App\Repositories;

use App\Models\Companies as Model;

class ApiCompanyRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getCompaniesPaginate($count = 15)
    {
        $column = ['company_name', 'company_id', 'company_average_mark'];
        $response = $this->startCondition()
            ->select($column)
            ->paginate($count);
        return $response;
    }
}
