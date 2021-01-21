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

$searchApiOptions = [
    'namespace' => 'Search',
    'prefix' => 'search'
];

Route::group($searchApiOptions, function ()
{
    Route::get('search-bar/{query}/{counter}', 'SearchBarController@index')
        ->name('search.search-bar');
});

$adminApiOptions = [
    'namespace' => 'Api',
    'prefix' => 'admin',
    'middleware' => 'auth:api'
];
Route::group($adminApiOptions, function ()
{
    $companiesMethods = ['index', 'edit', 'update'];
    Route::apiResource('companies', 'ApiCompaniesController')
        ->names('api.admin.companies')
        ->only($companiesMethods);
    Route::get('companies/short-list', 'ApiCompaniesController@shortList')
        ->name('api.admin.companies.short-list');

    $reviewsMethods = ['index', 'edit', 'update'];
    Route::apiResource('reviews', 'ApiReviewsController')
        ->names('api.admin.reviews')
        ->only($reviewsMethods);

    $imagesMethod = ['index'];
    Route::apiResource('images', 'ApiImagesController')
        ->names('api.admin.reviews')
        ->only($imagesMethod);
    Route::post('images/change-images-state', 'ApiImagesController@changeImagesState')
        ->name('api.admin.reviews.change-images-state');

    $articlesMethods = ['index', 'edit', 'update', 'create', 'store'];
    Route::apiResource('articles', 'ApiArticlesController')
        ->names('api.admin.articles')
        ->only($articlesMethods);

    $videosMethods = ['index', 'edit', 'update', 'create', 'store'];
    Route::apiResource('videos', 'ApiVideosController')
        ->names('api.admin.videos')
        ->only($videosMethods);

    $SEOAttributesMethods = ['index', 'edit', 'update'];
    Route::apiResource('seo-attributes', 'ApiSEOAttributesController')
        ->names('api.admin.seo-attributes')
        ->only($SEOAttributesMethods);

    $constantsMethods = ['index', 'edit', 'update'];
    Route::apiResource('constants', 'ApiConstantsController')
        ->names('api.admin.constants')
        ->only($constantsMethods);

    $headersMethods = ['index', 'edit', 'update'];

    Route::apiResource('headers', 'ApiHeadersController')
        ->names('api.admin.headers')
        ->only($headersMethods);

    $reviewAnswerMethods = ['index', 'edit', 'update'];

    Route::apiResource('review-answers', 'ApiReviewAnswersController')
        ->only($reviewAnswerMethods)
        ->names('api.admin.review-answers');

    $userMessagesMethods = ['index', 'edit', 'update'];

    Route::apiResource('user-messages', 'ApiUserMessagesController')
        ->only($userMessagesMethods)
        ->names('api.admin.user-messages');

});
