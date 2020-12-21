<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\SEO\UserSEORepository;
use Illuminate\Http\Request;

class ArticlesController extends UserController
{
    private $articleRepository;

    public function __construct(UserSEORepository $SEORepository, UserArticlesRepository $articlesRepository)
    {
        parent::__construct($SEORepository);
        $this->articleRepository = $articlesRepository;
    }

    public function index()
    {
        $articles = $this->articleRepository->getArticlesPaginate(19);
        $seo = $this->getSEOAttributes('articles');
        return view('rating.user.articles.index', ['articles' => $articles, 'seo' => $seo]);
    }

    public function show($slug = '', UserArticlesRepository $articlesRepository, UserCompaniesRepository $companiesRepository)
    {
        $article = $this->articleRepository->getArticleBySlug($slug);
        if ($article === null)
        {
            abort(404);
        }
        $articles = $articlesRepository->getSomeLastArticle();
        $companies = $companiesRepository->getCompaniesForForm();
        $seo = $this->getSEOAttributes('article');
        return view('rating.user.articles.show',
            [
                'article' => $article,
                'articles' => $articles,
                'companies' => $companies,
                'seo' => $seo
            ]);
    }
}
