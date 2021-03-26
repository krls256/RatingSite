<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Headers\UserHeadersRepository;
use App\Repositories\SEO\UserSEORepository;
use App\Repositories\Videos\UserVideosRepository;

abstract class UserController extends Controller
{
    private $seoRepository;
    private $headersRepository;
    private $videosRepository;

    public function __construct()
    {
        parent::__construct();
        $this->seoRepository = new UserSEORepository();
        $this->headersRepository = new UserHeadersRepository();
        $this->videosRepository = new UserVideosRepository();
    }

    protected function getSEOAttributes($index)
    {
        return $this->seoRepository->getSEOByIndex($index);
    }

    protected function getHeaders($arr) {
        return $this->headersRepository->getHeadersByKeys($arr);
    }

    protected function getSomeLastVideos($count = 2) {
        return $this->videosRepository->getSomeLastVideos($count);
    }

    protected function replaceHeaders(&$headers, $key, $value)
    {
        foreach ($headers as $k => $v)
        {
            $headers[$k] = str_replace($key, $value, $v);
        }
    }
}
