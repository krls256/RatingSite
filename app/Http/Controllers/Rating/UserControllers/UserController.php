<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Headers\UserHeadersRepository;
use App\Repositories\SEO\UserSEORepository;

abstract class UserController extends Controller
{
    private $seoRepository;
    private $headersRepository;

    public function __construct()
    {
        $this->seoRepository = new UserSEORepository();
        $this->headersRepository = new UserHeadersRepository();
    }

    protected function getSEOAttributes($index)
    {
        return $this->seoRepository->getSEOByIndex($index);
    }

    protected function getHeaders($arr) {
        return $this->headersRepository->getHeadersByKeys($arr);
    }
}
