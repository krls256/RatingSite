<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainController extends AdminAbstractController
{
    public function __construct() {
        parent::__construct();
    }
    public function index() {
        $api_token = $this->user->api_token;
        return view('admin.admin', [
            'api_token' => $api_token
        ]);
    }
}
