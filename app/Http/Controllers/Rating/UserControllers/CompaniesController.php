<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CompaniesController extends Controller
{
    public function index(Request $request) {
        return view('rating.user.companies.index', ['slug' => $request['slug']]);
    }
}
