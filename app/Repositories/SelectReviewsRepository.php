<?php


namespace App\Repositories;
use App\Models\Reviews as Model;

class SelectReviewsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getAllReviewsWithLinks()
    {
        $column = ['review_id', 'review_link'];
        $result = $this->startCondition()
            ->select($column)
            ->toBase()
            ->get();
        return $result;
    }
}
