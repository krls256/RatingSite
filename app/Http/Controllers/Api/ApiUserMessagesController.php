<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\UserMessages\UserMessagesUpdateRequest;
use App\Repositories\UserMessages\ApiUserMessagesRepository;

class ApiUserMessagesController extends ApiController
{
    private $repository;

    public function __construct(ApiUserMessagesRepository $userMessagesRepository)
    {
        $this->repository = $userMessagesRepository;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->repository->getUserMessagesPaginate(15);
    }

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $response = $this->repository->getUserMessageById($id);
        if ($response === null)
        {
            abort(404);
        }
        return $response;
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \string[][]
     */
    public function update(UserMessagesUpdateRequest $request, $id)
    {
        $data = $request->all();

        $result = $this->repository->updateUserMessageById($data, $id);

        return $this->updateResponse($result, $id);
    }
}
