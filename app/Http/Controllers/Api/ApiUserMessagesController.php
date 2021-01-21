<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\UserMessages\UserMessagesUpdateRequest;
use App\Repositories\UserMessages\ApiUserMessagesRepository;
use Illuminate\Http\Request;

class ApiUserMessagesController extends ApiController
{
    private $repository;

    public function __construct(ApiUserMessagesRepository $userMessagesRepository, Request $request)
    {
        parent::__construct($request, 'user_messages');
        $this->repository = $userMessagesRepository;
    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = $this->repository->getUserMessagesPaginate(15, $this->options);

        return $this->returnWithOptions($response, $this->options);
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
