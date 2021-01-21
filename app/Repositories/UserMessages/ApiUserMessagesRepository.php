<?php


namespace App\Repositories\UserMessages;


use App\Models\UserMessages as Model;
use App\Repositories\ApiRepository;

class ApiUserMessagesRepository extends ApiRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getUserMessagesPaginate($count = 15, $options = [])
    {
        $column = ['message_id', 'user_name', 'user_email', 'is_send', 'is_checked'];
        $response = $this->startCondition()
            ->select($column);
        $response = $this->addOrder($response, $options);
        $response = $this->addFilters($response, $options);
        $response = $response->paginate($count);
        return $response;
    }

    public function getUserMessageById($id)
    {
        $column = ['message_id', 'user_name', 'user_email', 'is_send', 'is_checked', 'user_message'];
        $response = $this->startCondition()
            ->select($column)
            ->where('message_id', $id)
            ->first();

        $response->update(['is_checked' => 1]);
        return $response;
    }

    public function updateUserMessageById($data, $id)
    {
        $response = $this->startCondition()
            ->find($id)
            ->update($data);
        return $response;
    }
}
