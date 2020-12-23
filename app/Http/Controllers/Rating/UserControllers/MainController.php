<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\BaseInfo\ColumnBaseInfoRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\SEO\UserSEORepository;

class MainController extends UserController {

    public function __construct(UserSEORepository $SEORepository) { parent::__construct($SEORepository); }

    public function index(UserArticlesRepository $articlesRepository, UserCompaniesRepository $companiesRepository) {
        $articles = $articlesRepository->getSomeLastArticle();
        $companies = $companiesRepository->getCompaniesForRating();
        $seo = $this->getSEOAttributes('main');
        $headers = $this->getHeaders(['main', 'rating', 'side']);

        return view('rating.user.main.index', [
            'articles' => $articles,
            'companies' => $companies,
            'seo' => $seo,
            'headers' => $headers
        ]);
    }
}
