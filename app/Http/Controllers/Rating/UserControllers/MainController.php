<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index(UserArticlesRepository $articlesRepository, UserCompaniesRepository $companiesRepository) {
        $articles = $articlesRepository->getSomeLastArticle();
        $companies = $companiesRepository->getCompaniesForRating();

        return view('rating.user.main.index', ['articles' => $articles, 'companies' => $companies]);
    }
}
