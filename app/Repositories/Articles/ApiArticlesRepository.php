<?php


namespace App\Repositories\Articles;


use App\Models\Articles as Model;
use App\Repositories\CoreRepository;

class ApiArticlesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getPaginate($count = 20)
    {
        $column = ['article_id', 'article_title', 'article_slug'];

        $response = $this->startCondition()
            ->select($column)
            ->paginate($count);

        return $response;
    }

    public function getEdit($id)
    {
        $column = ['article_id', 'article_title', 'article_slug', 'article_main_image', 'article_description',
            'article_content'];

        $response = $this->startCondition()
            ->select($column)
            ->where('article_id', $id)
            ->first();

        return $response;
    }
}
