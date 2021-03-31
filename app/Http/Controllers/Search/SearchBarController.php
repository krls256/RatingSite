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

    public function __construct(CompaniesSearchRepository $companiesSearchRepository,
        ArticlesSearchRepository $articlesSearchRepository)
    {
        parent::__construct();
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
        $headers = $this->getHeaders(['main.search'], ['main.search' => 'main']);

        return view('rating.user.search.show',
            [
                'query' => $query,
                'response' => $companies->merge($articles),
                'seo' => $seo,
                'headers' => $headers,
                'footer_videos' => $this->getSomeLastVideos(2)
            ]);
    }
}
