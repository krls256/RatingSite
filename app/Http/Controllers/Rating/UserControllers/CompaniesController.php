<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\Reviews\UserReviewsRepository;
use App\Repositories\SEO\UserSEORepository;
use Illuminate\Http\Request;

class CompaniesController extends UserController
{
    private $articles;
    private $company;
    private $reviewsRepository;
    private $seo;
    private $headers;

    public function __construct(
        UserSEORepository $SEORepository,
        Request $request,
        UserCompaniesRepository $companiesRepository,
        UserArticlesRepository $articlesRepository,
        UserReviewsRepository $reviewsRepository
    )
    {
        parent::__construct($SEORepository);
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
        $this->headers = $this->getHeaders(['main', 'side', 'reviews']);

        return 1;
    }

    public function index()
    {
        $reviews = $this->reviewsRepository->getCompanyReviewsPagination($this->company->company_id);

        return view('rating.user.companies.index',
            [
                'company' => $this->company,
                'articles' => $this->articles,
                'reviews' => $reviews,
                'seo' => $this->seo,
                'headers' => $this->headers
            ]);
    }

    public function positive()
    {
        $reviews = $this->reviewsRepository->getCompanyPositiveReviewsPagination($this->company->company_id);

        return view('rating.user.companies.index',
            [
                'company' => $this->company,
                'articles' => $this->articles,
                'reviews' => $reviews,
                'seo' => $this->seo,
                'headers' => $this->headers
            ]);
    }

    public function negative()
    {
        $reviews = $this->reviewsRepository->getCompanyNegativeReviewsPagination($this->company->company_id);

        return view('rating.user.companies.index',
            [
                'company' => $this->company,
                'articles' => $this->articles,
                'reviews' => $reviews,
                'seo' => $this->seo,
                'headers' => $this->headers
            ]);
    }
}
