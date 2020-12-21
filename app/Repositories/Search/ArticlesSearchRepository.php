<?php


namespace App\Repositories\Search;


use App\Repositories\CoreRepository;
use App\Models\Articles as Model;

class ArticlesSearchRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getSearchResponse($query) {
        $column = ['article_id as id', 'article_title as title', 'article_slug as slug'];
        $response = $this->startCondition()
            ->select($column)
            ->where('article_title', 'like', "%$query%")
            ->toBase()
            ->get();
        $response = $response->map(function ($item)
        {
            $item->link = route('rating.user.articles.show', $item->slug);
            return $item;
        });
        return $response;
    }
}
