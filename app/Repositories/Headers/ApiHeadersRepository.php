<?php


namespace App\Repositories\Headers;


use App\Models\Headers as Model;
use App\Repositories\ApiRepository;

class ApiHeadersRepository extends ApiRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getHeadersPaginate($count = 15, $options = [])
    {
        $column = ['header_id', 'header_key', 'header_value', 'header_description'];
        $response = $this->startCondition()
            ->select($column);
        $response = $this->addOrder($response, $options);
        $response = $this->addFilters($response, $options);
        $response = $response->paginate($count);

        return $response;
    }

    public function getHeaderEdit($id)
    {
        $column = ['header_id', 'header_key', 'header_value', 'header_description'];
        $response = $this->startCondition()
            ->select($column)
            ->where('header_id', $id)
            ->first();
        return $response;
    }

    public function updateHeader($data, $id)
    {
        $response = $this->startCondition()
            ->where('header_id', $id)
            ->first()
            ->update($data);
        return $response;
    }
}
