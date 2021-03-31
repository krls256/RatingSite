<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\Reviews\UserReviewsRepository;
use Illuminate\Http\Request;

class CompaniesController extends UserController
{
    private $articles;
    private $company;
    private $reviewsRepository;
    private $seo;
    private $headers;

    public function __construct(
        Request $request,
        UserCompaniesRepository $companiesRepository,
        UserArticlesRepository $articlesRepository,
        UserReviewsRepository $reviewsRepository
    )
    {
        parent::__construct();
        $slug = $request['slug'];

        if($slug === null) {
            return back();
        }

        $this->company = $companiesRepository->getCompanyForPage($slug);
        if (!$this->company)
        {
            abort(404);
        }
        $this->articles = $articlesRepository->getSomeLastArticle(2);
        $this->reviewsRepository = $reviewsRepository;
        $this->seo = $this->getSEOAttributes('companies');
        $this->seo->replaceData($this->company->company_name);

        return 1;
    }

    public function index()
    {
        $this->prepareHeaders(
            ['main.companies', 'side', 'reviews', 'about-company'],
            ['main.companies' => 'main']
        );
        $reviews = $this->reviewsRepository->getCompanyReviewsPagination($this->company->company_id);

        return view('rating.user.companies.index',
            [
                'company' => $this->company,
                'articles' => $this->articles,
                'reviews' => $reviews,
                'seo' => $this->seo,
                'headers' => $this->headers,
                'footer_videos' => $this->getSomeLastVideos(2)
            ]);
    }

    public function positive()
    {
        $this->prepareHeaders(
            ['main.companies', 'side', 'reviews.positive', 'about-company'],
            ['reviews.positive' => 'reviews', 'main.companies' => 'main']
        );
        $reviews = $this->reviewsRepository->getCompanyPositiveReviewsPagination($this->company->company_id);

        return view('rating.user.companies.index',
            [
                'company' => $this->company,
                'articles' => $this->articles,
                'reviews' => $reviews,
                'seo' => $this->seo,
                'headers' => $this->headers,
                'footer_videos' => $this->getSomeLastVideos(2)
            ]);
    }

    public function negative()
    {
        $this->prepareHeaders(
            ['main.companies', 'side', 'reviews.negative', 'about-company'],
            ['reviews.negative' => 'reviews', 'main.companies' => 'main']
        );
        $reviews = $this->reviewsRepository->getCompanyNegativeReviewsPagination($this->company->company_id);

        return view('rating.user.companies.index',
            [
                'company' => $this->company,
                'articles' => $this->articles,
                'reviews' => $reviews,
                'seo' => $this->seo,
                'headers' => $this->headers,
                'footer_videos' => $this->getSomeLastVideos(2)
            ]);
    }

    protected function prepareHeaders($headers, array $replacements = []) {
        $this->headers = $this->getHeaders($headers, $replacements);
        $this->replaceHeaders($this->headers, '(data)', $this->company->company_name);
    }
}
