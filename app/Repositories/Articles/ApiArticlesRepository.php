<?php


namespace App\Repositories\Articles;


use App\Models\Articles as Model;
use App\Repositories\ApiRepository;
use App\Repositories\CoreRepository;

class ApiArticlesRepository extends ApiRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getPaginate($count = 20, $options = [])
    {
        $column = ['article_id', 'article_title', 'article_slug', 'is_published'];

        $response = $this->startCondition()
            ->select($column);
        $response = $this->addOrder($response, $options);
        $response = $this->addFilters($response, $options);
        $response = $response->paginate($count);

        return $response;
    }

    public function getEdit($id)
    {
        $column = ['article_id', 'article_title', 'article_html', 'article_description',
            'article_content', 'is_published', 'article_folder'];

        $response = $this->startCondition()
            ->select($column)
            ->where('article_id', $id)
            ->first();

        return $response;
    }

    public function createArticle($data) {
        $result = $this->startCondition()
            ->create($data);

        return $result;
    }

    public function getMainImagePath($id) {
        $column = ['article_id', 'article_folder', 'article_main_image'];

        $res = $this->startCondition()
            ->select($column)
            ->where('article_id', $id)
            ->first();

        return $res;
    }

    public function update($id, $data) {
        $res = $this->startCondition()
            ->where('article_id', $id)
            ->update($data);
        return $res;
    }
}
