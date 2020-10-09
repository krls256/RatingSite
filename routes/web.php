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

    Route::get('/', function () {
        return view('welcome');
    });

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
        Route::get('/{path?}', 'MainController@index')->name('admin.main');
    });
    Route::group([], function() {
        Route::get('/err', 'ExeptionController@notAnAdmin')->name('you-are-not-an-admin');
    });
});
