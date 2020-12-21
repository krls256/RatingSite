<?php


namespace App\Repositories\Articles;


use App\Models\Articles as Model;
use App\Repositories\CoreRepository;

class UserArticlesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getSomeLastArticle($count = 2)
    {
        $column = ['article_id', 'article_slug', 'is_published', 'article_title', 'article_description',
            'article_main_image'];

        $response = $this->startCondition()
            ->select($column)
            ->orderBy('article_id', 'desc')
            ->where('is_published', 1)
            ->take($count)
            ->get();

        return $response;
    }

    public function getArticlesPaginate(int $count = 18)
    {
        $column =
            [
                'article_id', 'created_at', 'article_title', 'article_slug',
                'article_main_image', 'article_description', 'is_published'
            ];

        $response = $this->startCondition()
            ->select($column)
            ->where('is_published', 1)
            ->orderBy('created_at')
            ->paginate($count);
        return $response;
    }

    public function getArticleBySlug($slug) {
        $column = ['article_id', 'created_at', 'article_title', 'article_slug',
            'article_main_image', 'article_description', 'is_published', 'article_content'];

        $response = $this->startCondition()
            ->select($column)
            ->where('article_slug', $slug)
            ->first();

        return $response;
    }
}
