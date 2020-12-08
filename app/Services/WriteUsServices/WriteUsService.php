<?php


namespace App\Services\WriteUsServices;


use App\Mail\WriteUsMail;
use App\Repositories\UserMessages\UserMessagesRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class WriteUsService
{
    private $repository;
    private $request;

    public function __construct(UserMessagesRepository $messagesRepository, Request $request) {
        $this->repository = $messagesRepository;
        $this->request = $request;
    }

    public function main() {
        $data = $this->request->all();
        $response = $this->repository->storeMessage($data);
        return $response;
    }
}
