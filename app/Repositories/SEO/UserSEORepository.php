<?php


namespace App\Repositories\SEO;

use App\Models\SEOAttributes as Model;
use App\Repositories\CoreRepository;

class UserSEORepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getSEOByIndex($index)
    {
        $column = ['title_index', 'title', 'description', 'keywords'];
        $response = $this->startCondition()
            ->select($column)
            ->where('title_index', $index)
            ->first();

        return $response;
    }
}
