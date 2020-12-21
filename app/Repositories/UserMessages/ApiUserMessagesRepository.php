<?php


namespace App\Repositories\UserMessages;


use App\Repositories\CoreRepository;
use App\Models\UserMessages as Model;

class ApiUserMessagesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getUserMessagesPaginate($count = 15) {
        $column = ['message_id', 'user_name', 'user_email', 'is_send', 'is_checked'];
        $response = $this->startCondition()
            ->select($column)
            ->orderBy('message_id', 'desc')
            ->paginate($count);
        return $response;
    }

    public function getUserMessageById($id) {
        $column = ['message_id', 'user_name', 'user_email', 'is_send', 'is_checked', 'user_message'];
        $response = $this->startCondition()
            ->select($column)
            ->where('message_id', $id)
            ->first();

        $response->update(['is_checked' => 1]);
        return $response;
    }

    public function updateUserMessageById($data, $id) {
        $response = $this->startCondition()
            ->find($id)
            ->update($data);
        return $response;
    }
}
