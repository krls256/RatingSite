<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Http\Controllers\Controller;
use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\Videos\UserVideosRepository;

class VideosController extends Controller
{
    public function index(UserVideosRepository $videosRepository, UserArticlesRepository $articlesRepository,
        UserCompaniesRepository $companiesRepository) {
        $videos = $videosRepository->getVideosPaginate(15);
        $articles = $articlesRepository->getSomeLastArticle(2);
        $companies = $companiesRepository->getCompaniesForForm();

        if($videos->count() === 0) {
            abort(404);
        }
        return view('rating.user.videos.index',
            [
                'videos' => $videos,
                'articles' => $articles,
                'companies' => $companies
            ]);
    }
}
