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


Route::group([], function () {
    //UserGroup
    $userGroupData = [
        'namespace' => "Rating\UserControllers"
    ];

    Route::group($userGroupData, function () {
        Route::get('/', 'MainController@index')->name('rating.user.main');
        Route::get('/about', 'AboutController@index')->name('rating.user.about');
        Route::get('/articles', 'ArticlesController@index')->name('rating.user.articles');
        Route::get('/videos', 'VideosController@index')->name('rating.user.videos');

        Route::get('/companies/{slug}', 'CompaniesController@index')->name('rating.user.companies');

        Route::get('/articles/{slug}', 'ArticlesController@show')->name('rating.user.articles.show');

        Route::post('/left-review', function () {
            dd(__METHOD__);
        })->name('rating.user.left.review');
    });





//    Auth::routes();
    Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
    Route::post('login', 'Auth\LoginController@login');
    Route::post('logout', 'Auth\LoginController@logout')->name('logout');

    Route::get('/auth', 'AuthController@index')->name('auth');




    $adminGroupData = [
        'namespace' => "Admin",
        'prefix' => "admin/",
        'middleware' => ['auth', 'admin']
    ];

    Route::group($adminGroupData, function () {
        Route::get('{any?}', 'MainController@index')->name('admin.main')->where('any', '.*');
    });
    Route::group([], function() {
        Route::get('/err', 'ExeptionController@notAnAdmin')->name('you-are-not-an-admin');
    });
});
