<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index(UserArticlesRepository $articlesRepository, UserCompaniesRepository $companiesRepository) {
        $articles = $articlesRepository->getSomeLastArticle(2);
        $companies = $companiesRepository->getCompaniesForForm();
        return view('rating.user.about.index', ['articles' => $articles, 'companies' => $companies]);
    }
}
