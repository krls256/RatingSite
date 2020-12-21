<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;

abstract class ApiController extends Controller
{

    protected function updateResponse($result, $id)
    {
        if ($result)
            return ['msg' => ['База была успешно обновлена', "Id обновленной записи равен $id"]];
        return ['msg' => ['Что-то пошло не так']];
    }
}
