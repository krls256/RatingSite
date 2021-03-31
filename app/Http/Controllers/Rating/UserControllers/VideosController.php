<?php

namespace App\Http\Controllers\Rating\UserControllers;

use App\Repositories\Articles\UserArticlesRepository;
use App\Repositories\Companies\UserCompaniesRepository;
use App\Repositories\SEO\UserSEORepository;
use App\Repositories\Videos\UserVideosRepository;

class VideosController extends UserController
{

    public function index(
        UserVideosRepository $videosRepository,
        UserArticlesRepository $articlesRepository,
        UserCompaniesRepository $companiesRepository)
    {

        $videos = $videosRepository->getVideosPaginate(3);
        if ($videos->count() === 0)
        {
            abort(404);
        }
        $articles = $articlesRepository->getSomeLastArticle(2);
        $companies = $companiesRepository->getCompaniesForForm();
        $seo = $this->getSEOAttributes('videos');
        $headers = $this->getHeaders(
            ['main.videos', 'side', 'videos'],
            ['main.videos' => 'main']
        );

        return view('rating.user.videos.index',
            [
                'videos' => $videos,
                'articles' => $articles,
                'companies' => $companies,
                'seo' => $seo,
                'headers' => $headers,
                'footer_videos' => $this->getSomeLastVideos(2)
            ]);
    }
}
