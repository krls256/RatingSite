<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Rating\UserControllers\UserController;
use App\Repositories\Search\ArticlesSearchRepository;
use App\Repositories\Search\CompaniesSearchRepository;
use App\Repositories\SEO\UserSEORepository;

class SearchBarController extends UserController
{
    private $companiesSearchRepository;
    private $articlesSearchRepository;

    public function __construct(UserSEORepository $SEORepository, CompaniesSearchRepository $companiesSearchRepository,
        ArticlesSearchRepository $articlesSearchRepository)
    {
        parent::__construct($SEORepository);
        $this->companiesSearchRepository = $companiesSearchRepository;
        $this->articlesSearchRepository = $articlesSearchRepository;
    }

    public function index($query, $counter)
    {
        $companies = $this->companiesSearchRepository->getSearchResponse($query);
        $articles = $this->articlesSearchRepository->getSearchResponse($query);

        return [
            'response' => $companies->merge($articles),
            'query' => $query,
            'counter' => $counter
        ];
    }

    public function show($query = '')
    {
        if ($query !== '')
        {
            $companies = $this->companiesSearchRepository->getSearchResponse($query);
            $articles = $this->articlesSearchRepository->getSearchResponse($query);
        } else
        {
            $companies = collect([]);
            $articles = collect([]);
        }

        $seo = $this->getSEOAttributes('search');

        return view('rating.user.search.show',
            [
                'query' => $query,
                'response' => $companies->merge($articles),
                'seo' => $seo
            ]);
    }
}
