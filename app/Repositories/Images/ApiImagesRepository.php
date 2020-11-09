<?php


namespace App\Repositories\Images;


use App\Models\Images as Model;
use App\Repositories\CoreRepository;


class ApiImagesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getPaginate($count = 50)
    {
        $column = ['image_id', 'image_link','review_id', 'is_published', 'is_on_company_page'];
        $response = $this->startCondition()
            ->select($column)
            ->paginate($count);

        return $response;
    }

}
