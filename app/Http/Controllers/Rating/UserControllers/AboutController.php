<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\SEO\UserSEORepository;
use Illuminate\Http\Request;

class AboutController extends UserController
{
    public function index(UserArticlesRepository $articlesRepository, UserCompaniesRepository $companiesRepository) {
        $articles = $articlesRepository->getSomeLastArticle(2);
        $companies = $companiesRepository->getCompaniesForForm();
        $seo = $this->getSEOAttributes('about');
        $headers = $this->getHeaders(['main.about', 'about', 'side'], ['main.about' => 'main']);

        return view('rating.user.about.index', [
            'articles' => $articles,
            'companies' => $companies,
            'seo' => $seo,
            'headers' => $headers,
            'footer_videos' => $this->getSomeLastVideos(2)
            ]);
    }
}
