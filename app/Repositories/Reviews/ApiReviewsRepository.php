<?php


namespace App\Repositories\Reviews;

use App\Models\Reviews as Model;
use App\Repositories\CoreRepository;

class ApiReviewsRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getReviewsPaginate($count = 15)
    {
        $column = ['review_id', 'review_date', 'reviewer_name', 'review_mark', 'is_published'];
        $response = $this->startCondition()
            ->select($column)
            ->paginate($count);
        return $response;
    }
    public function getEdit($id) {
        $column = ['review_id', 'review_place_in_top_10', 'is_published', 'review_date', 'review_link',
            'review_mark', 'reviewer_name', 'source_id', 'review_text', 'company_id',];
        $response = $this->startCondition()
            ->select($column)
            ->where('review_id', $id)
            ->first();
        return $response;
    }
}
