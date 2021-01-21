<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Services\ApiFilterServices\ApiFilterPrepareService;
use Illuminate\Http\Request;


abstract class ApiController extends Controller
{
    protected $options;

    public function __construct(Request $request, $tableName = '')
    {
        parent::__construct();
        $service = new ApiFilterPrepareService($tableName);
        $this->options = $service->prepareData($request->all());
    }

    protected function updateResponse($result, $id)
    {
        if ($result)
            return ['msg' => ['База была успешно обновлена', "Id обновленной записи равен $id"]];
        return ['msg' => ['Что-то пошло не так']];
    }

    protected function returnWithOptions($response, $options)
    {
        $response = $response->toArray();
        $response['options'] = $options;

        return $response;
    }

    protected function storeResponse($result, $field)
    {
        if ($result)
        {
            $id = $result[$field];
            return ['msg' => ['Запись была успешно содана', "Id созданой записи равен $id"], 'id' => $id];
        }
        return ['msg' => ['Что-то пошло не так']];
    }
}
