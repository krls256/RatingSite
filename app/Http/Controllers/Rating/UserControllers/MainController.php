<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\BaseInfo\ColumnBaseInfoRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\SEO\UserSEORepository;
use GrahamCampbell\Markdown\Facades\Markdown;

class MainController extends UserController {

    public function index(UserArticlesRepository $articlesRepository, UserCompaniesRepository $companiesRepository) {
        $articles = $articlesRepository->getSomeLastArticle();
        $companies = $companiesRepository->getCompaniesForRating();
        $seo = $this->getSEOAttributes('main');
        $headers = $this->getHeaders(
            ['main.home', 'rating', 'side'],
            ['main.home' => 'main']
        );

        return view('rating.user.main.index', [
            'articles' => $articles,
            'companies' => $companies,
            'seo' => $seo,
            'headers' => $headers,
            'footer_videos' => $this->getSomeLastVideos(2)
        ]);
    }
}
