<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function index() {
        return view('rating.user.articles.index');
    }

    public function show(Request $request) {
        return view('rating.user.articles.show', ['slug' => $request['slug']]);
    }
}
