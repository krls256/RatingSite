<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\Reviews\UserReviewsRepository;
use Illuminate\Http\Request;

class CompaniesController extends Controller
{
    private $articles;
    private $company;
    private $reviewsRepository;

    public function __construct(
        Request $request,
        UserCompaniesRepository $companiesRepository,
        UserArticlesRepository $articlesRepository,
        UserReviewsRepository $reviewsRepository
    )
    {
        $slug = $request['slug'];
        $this->company = $companiesRepository->getCompanyForPage($slug);
        if (!$this->company)
        {
            abort(404);
        }
        $this->articles = $articlesRepository->getSomeLastArticle(2);
        $this->reviewsRepository = $reviewsRepository;
    }

    public function index()
    {
        $reviews = $this->reviewsRepository->getCompanyReviewsPagination($this->company->company_id);

        return view('rating.user.companies.index',
            ['company' => $this->company, 'articles' => $this->articles, 'reviews' => $reviews]);
    }

    public function positive()
    {
        $reviews = $this->reviewsRepository->getCompanyPositiveReviewsPagination($this->company->company_id);

        return view('rating.user.companies.index',
            ['company' => $this->company, 'articles' => $this->articles, 'reviews' => $reviews]);
    }

    public function negative()
    {
        $reviews = $this->reviewsRepository->getCompanyNegativeReviewsPagination($this->company->company_id);

        return view('rating.user.companies.index',
            ['company' => $this->company, 'articles' => $this->articles, 'reviews' => $reviews]);
    }
}
