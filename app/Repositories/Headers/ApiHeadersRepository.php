<?php


namespace App\Repositories\Headers;


use App\Repositories\CoreRepository;
use App\Models\Headers as Model;

class ApiHeadersRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getHeadersPaginate($count = 15) {
        $column = ['header_id', 'header_key', 'header_value', 'header_description'];
        $response = $this->startCondition()
            ->select($column)
            ->orderBy('header_id', 'desc')
            ->paginate($count);
        return $response;
    }

    public function getHeaderEdit($id) {
        $column = ['header_id', 'header_key', 'header_value', 'header_description'];
        $response = $this->startCondition()
            ->select($column)
            ->where('header_id', $id)
            ->first();
        return $response;
    }

    public function updateHeader($data, $id) {
        $response = $this->startCondition()
            ->where('header_id', $id)
            ->first()
            ->update($data);
        return $response;
    }
}
