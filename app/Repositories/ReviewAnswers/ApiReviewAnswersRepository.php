<?php


namespace App\Repositories\ReviewAnswers;


use App\Models\ReviewAnswers as Model;
use App\Repositories\ApiRepository;

class ApiReviewAnswersRepository extends ApiRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getReviewAnswersPaginate($count = 15, $options = [])
    {
        $column = ['review_answer_id', 'reviewer_answer_name', 'review_id', 'is_published'];
        $response = $this->startCondition()
            ->select($column);
        $response = $this->addOrder($response, $options);
        $response = $this->addFilters($response, $options);
        $response = $response->paginate($count);
        return $response;
    }

    public function getReviewAnswerById($id)
    {
        $column = ['review_answer_id', 'reviewer_answer_name', 'review_answer_text', 'review_id', 'is_published'];
        $response = $this->startCondition()
            ->select($column)
            ->where('review_answer_id', $id)
            ->first();
        return $response;
    }

    public function updateReviewAnswer($data, $id)
    {
        $response = $this->startCondition()
            ->find($id)
            ->update($data);
        return $response;
    }
}
