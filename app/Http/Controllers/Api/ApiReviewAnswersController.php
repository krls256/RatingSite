<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ReviewAnswers\ReviewAnswersUpdateRequest;
use App\Repositories\ReviewAnswers\ApiReviewAnswersRepository;

class ApiReviewAnswersController extends ApiController
{
    private $repository;

    public function __construct(ApiReviewAnswersRepository $answersRepository) {
        $this->repository = $answersRepository;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->repository->getReviewAnswersPaginate(15);
    }

    /**
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $response = $this->repository->getReviewAnswerById($id);
        if ($response === null)
        {
            abort(404);
        }
        return $response;
    }

    /**
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \string[][]
     */
    public function update(ReviewAnswersUpdateRequest $request, $id)
    {
        $data = $request->all();

        $result = $this->repository->updateReviewAnswer($data, $id);

        return $this->updateResponse($result, $id);
    }

}
