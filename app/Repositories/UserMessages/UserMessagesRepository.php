<?php


namespace App\Repositories\UserMessages;


use App\Repositories\CoreRepository;
use App\Models\UserMessages as Model;

class UserMessagesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function storeMessage($data) {
        $response = $this->startCondition()->create($data);

        return $response;
    }

    public function getUnsentMessages() {
        $column = ['message_id', 'user_name', 'user_email', 'user_message', 'is_send', 'created_at'];

        $response = $this->startCondition()
            ->select($column)
            ->where('is_send', 0)
            ->orderBy('message_id')
            ->get();

        return $response;
    }

    public function setAllMessagesSend() {
        $this->startCondition()->select('company_id', 'is_send')->update(['is_send' => 1]);
    }
}
