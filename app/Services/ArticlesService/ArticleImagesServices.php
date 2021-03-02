<?php


namespace App\Services\ArticlesService;


use App\Repositories\Articles\ApiArticlesRepository;
use App\Services\FSServices\ArticleFSService;

class ArticleImagesServices
{
    private $repository;
    private $FSService;

    public function __construct(ApiArticlesRepository $repository, ArticleFSService $FSService)
    {
        $this->repository = $repository;
        $this->FSService = $FSService;
    }

    public function replaceMainImage($id, $file)
    {
        $res = $this->repository->getMainImagePath($id);
        if(!$res) {
            return abort(404);
        }
        preg_match_all('/main\..+/', $res->article_main_image, $matches);

        $this->FSService->deleteArticleFile($res->article_folder . $matches[0][0]);
        $createRes = $this->FSService->createMainPhoto($res->article_folder, $file);
        $res = $this->repository->update($id, ['article_main_image' => $createRes['fileName']]);

        return $res;
    }

    public function deleteImage($path) {
        if(preg_match('/main\..+/', $path)) {
            return false;
        }
        $this->FSService->deleteArticleFile($path);
        return true;
    }


    public function uploadImage($id, $image) {
        $article = $this->repository->getMainImagePath($id);
        if(!$article) {
            return false;
        }

        return $this->FSService->storeFile($article->article_folder, $image);
    }
}
