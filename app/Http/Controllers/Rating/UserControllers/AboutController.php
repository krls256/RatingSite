<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\SEO\UserSEORepository;
use Illuminate\Http\Request;

class AboutController extends UserController
{
    public function __construct(UserSEORepository $SEORepository) { parent::__construct($SEORepository); }

    public function index(UserArticlesRepository $articlesRepository, UserCompaniesRepository $companiesRepository) {
        $articles = $articlesRepository->getSomeLastArticle(2);
        $companies = $companiesRepository->getCompaniesForForm();
        $seo = $this->getSEOAttributes('about');
        return view('rating.user.about.index', ['articles' => $articles, 'companies' => $companies, 'seo' => $seo]);
    }
}
