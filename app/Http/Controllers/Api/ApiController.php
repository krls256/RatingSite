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

    protected function updateResponse($result, $id = null)
    {
        $message = $id === null ?  ['База была успешно обновлена'] : ['База была успешно обновлена', "Id обновленной записи равен $id"];
        if ($result)
            return response()
                ->json(['msg' => $message], 200);
        return response()
            ->json(['msg' => ['Что-то пошло не так']], 500);
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
            return response()
                    ->json(['msg' => ['Запись была успешно содана', "Id созданой записи равен $id"], 'id' => $id], 200);
        }

        return response()
            ->json(['msg' => ['Что-то пошло не так']], 500);
    }
}
