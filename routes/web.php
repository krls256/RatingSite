<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
$MainGroupData = [
    'middleware' => 'web',
];


Route::group($MainGroupData, function ()
{
    //UserGroup
    $userGroupData = [
        'namespace' => "Rating\UserControllers"
    ];

    Route::group($userGroupData, function ()
    {
        Route::get('/', 'MainController@index')
            ->name('rating.user.main');
        Route::get('/about', 'AboutController@index')
            ->name('rating.user.about');
        Route::get('/videos', 'VideosController@index')
            ->name('rating.user.videos');

        Route::get('/companies/{slug}', 'CompaniesController@index')
            ->name('rating.user.companies');
        Route::get('/companies/{slug}/positive', 'CompaniesController@positive')
            ->name('rating.user.companies.positive');
        Route::get('/companies/{slug}/negative', 'CompaniesController@negative')
            ->name('rating.user.companies.negative');

        Route::resource('articles', 'ArticlesController')
            ->names('rating.user.articles')
            ->only(['show', 'index']);

        Route::get('/review/{id}', 'ReviewController@index')
            ->name('rating.user.reviews.index');
    });

    $searchGroupData = [
        'namespace' => 'Search'
    ];

    Route::group($searchGroupData, function ()
    {
        Route::get('/search/{query?}', 'SearchBarController@show')->name('rating.search');
    });

    $userFormGroupData = [
        'namespace' => "Rating\UserControllers",
        'prefix' => 'form'
    ];

    Route::group($userFormGroupData, function ()
    {
        Route::post('/leave-review', 'NewReviewsController@index')
            ->name('rating.user.leave.review');

        Route::get('/leave-review', 'NewReviewsController@redirect')
            ->name('rating.user.leave.review.redirect');

        Route::post('/write-us', 'WriteUsController@index')
            ->name('rating.user.write-us');

        Route::get('/write-us', 'WriteUsController@redirect')
            ->name('rating.user.write-us.redirect');

        Route::post('/add-comment', 'AddReviewAnswerController@index')
            ->name('rating.user.addReviewAnswer');

        Route::get('/add-comment', 'AddReviewAnswerController@redirect')
            ->name('rating.user.addReviewAnswer.redirect');
    });


//    Auth::routes();
    Route::get('login', 'Auth\LoginController@showLoginForm')
        ->name('login');
    Route::post('login', 'Auth\LoginController@login');
    Route::post('logout', 'Auth\LoginController@logout')
        ->name('logout');

    Route::get('/auth', 'AuthController@index')
        ->name('auth');


    $adminGroupData = [
        'namespace' => "Admin",
        'prefix' => "admin/",
        'middleware' => ['auth', 'admin']
    ];

    Route::group($adminGroupData, function ()
    {
        Route::get('{any?}', 'MainController@index')
            ->name('admin.main')
            ->where('any', '.*');
    });
    Route::group([], function ()
    {
        Route::get('/err', 'ExeptionController@notAnAdmin')
            ->name('you-are-not-an-admin');
    });


    $filesGroupData = [
        'namespace' => "Files",
    ];

    Route::group($filesGroupData, function () {
        Route::get('sitemap.xml', 'SitemapController@index');
    });
});
