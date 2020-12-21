<?php


namespace App\Repositories\Search;


use App\Models\Companies as Model;
use App\Repositories\CoreRepository;

class CompaniesSearchRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getSearchResponse($query)
    {
        $column = ['company_id as id', 'company_name as title', 'company_slug as slug'];
        $response = $this->startCondition()
            ->select($column)
            ->where('company_name', 'like', "%$query%")
            ->toBase()
            ->get();
        $response = $response->map(function ($item)
        {
            $item->link = route('rating.user.companies', $item->slug);
            return $item;
        });
        return $response;
    }
}
