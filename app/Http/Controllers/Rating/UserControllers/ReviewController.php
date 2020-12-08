<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Reviews\UserReviewsRepository;

class ReviewController extends Controller
{
    public function index($review_id, UserReviewsRepository $reviewsRepository, UserArticlesRepository $articlesRepository)
    {
        $review = $reviewsRepository->getReviewById($review_id);
        if ($review === null)
        {
            abort(404);
        }

        $articles = $articlesRepository->getSomeLastArticle(2);
        return view('rating.user.review.index', ['review' => $review, 'articles' => $articles]);
    }
}
