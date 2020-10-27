<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')
    ->get('/user', function (Request $request)
    {
        return $request->user();
    });

$adminApiOptions = [
    'namespace' => 'Api',
    'prefix' => 'admin',
    'middleware' => 'auth:api'
];
Route::group($adminApiOptions, function ()
{
    $companiesMethods = ['index'];
    Route::apiResource('companies', 'ApiCompaniesController')
        ->names('api.admin.companies')
        ->only($companiesMethods);
});
