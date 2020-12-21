<?php


namespace App\Repositories\ReviewAnswers;


use App\Repositories\CoreRepository;
use App\Models\ReviewAnswers as Model;

class ApiReviewAnswersRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getReviewAnswersPaginate($count = 15) {
        $column = ['review_answer_id', 'reviewer_answer_name', 'review_id', 'is_published'];
        $response = $this->startCondition()
            ->select($column)
            ->orderBy('review_answer_id', 'desc')
            ->paginate($count);
        return $response;
    }

    public function getReviewAnswerById($id) {
        $column = ['review_answer_id', 'reviewer_answer_name', 'review_answer_text', 'review_id', 'is_published'];
        $response = $this->startCondition()
            ->select($column)
            ->where('review_answer_id', $id)
            ->first();
        return $response;
    }

    public function updateReviewAnswer($data, $id) {
        $response = $this->startCondition()
            ->find($id)
            ->update($data);
        return $response;
    }
}
