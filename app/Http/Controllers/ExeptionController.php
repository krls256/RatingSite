<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExeptionController extends Controller
{
    public function __construct() {
        parent::__construct();
    }

    public function notAnAdmin() {
        return view('admin.you-are-not-an-admin');
    }
}
