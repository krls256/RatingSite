<?php


namespace App\Repositories\SEO;


use App\Models\SEOAttributes as Model;
use App\Repositories\CoreRepository;

class ApiSEORepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getSEOPaginate($count = 15)
    {
        $column = ['id', 'title_index', 'title'];
        $response = $this->startCondition()
            ->select($column)
            ->orderBy('id', 'desc')
            ->paginate($count);

        return $response;
    }

    public function getSEOEdit($id)
    {
        $column = ['id', 'title_index', 'title', 'description', 'keywords'];
        $response = $this->startCondition()
            ->select($column)
            ->where('id', $id)
            ->first();

        return $response;
    }

    public function updateSEO($data, $id)
    {
        $response = $this->startCondition()
            ->where('id', $id)
            ->first()
            ->update($data);
        return $response;
    }
}
