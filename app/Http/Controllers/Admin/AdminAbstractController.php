<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

abstract class AdminAbstractController extends Controller
{
    public function __construct() {
        parent::__construct();
    }
}
