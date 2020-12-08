<?php


namespace App\Repositories\ReviewAnswers;


use App\Repositories\CoreRepository;
use App\Models\ReviewAnswers as Model;

class UserReviewAnswersRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function storeReviewAnswer(array $data) {
        $response = $this->startCondition()->create($data);

        return $response;
    }
}
