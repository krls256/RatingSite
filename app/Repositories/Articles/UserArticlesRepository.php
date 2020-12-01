<?php


namespace App\Repositories\Articles;


use App\Repositories\CoreRepository;
use App\Models\Articles as Model;

class UserArticlesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getSomeLastArticle($count = 2) {
        $column = ['article_id', 'article_slug', 'is_published' , 'article_title', 'article_description', 'article_main_image'];

        $response = $this->startCondition()
            ->select($column)
            ->orderBy('article_id', 'desc')
            ->where('is_published', 1)
            ->take($count)
            ->get();

        return $response;
    }
}
