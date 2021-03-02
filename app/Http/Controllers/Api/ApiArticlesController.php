<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ApiArticleUpdateRequest;
use App\Http\Requests\Articles\ApiArticlesDeleteImageRequest;
use App\Http\Requests\Articles\ApiArticlesMainImageRequest;
use App\Http\Requests\Articles\ApiArticlesStoreRequest;
use App\Http\Requests\Articles\ApiArticlesUploadImageRequest;
use App\Models\Articles;
use App\Repositories\Articles\ApiArticlesRepository;
use App\Services\ArticlesService\ArticleImagesServices;
use App\Services\FSServices\ArticleFSService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ApiArticlesController extends ApiController
{
    private $repository;

    public function __construct(ApiArticlesRepository $repository, Request $request)
    {
        parent::__construct($request, 'articles');
        $this->repository = $repository;
    }

    public function index()
    {
        $articles = $this->repository->getPaginate(20, $this->options);

        return $this->returnWithOptions($articles, $this->options);
    }

    public function create(Articles $articles)
    {
        return $articles->getFillable();
    }

    public function store(ApiArticlesStoreRequest $storeRequest, ApiArticlesRepository $articlesRepository)
    {
        $result = $articlesRepository->createArticle($storeRequest->all());

        return $this->storeResponse($result, 'article_id');
    }

    public function edit($id)
    {
        $article = $this->repository->getEdit($id);

        $fsService = new ArticleFSService();
        $article->files = $fsService->getImagesExceptMain($article->article_folder);
        return $article;
    }

    public function update(ApiArticleUpdateRequest $request, $id)
    {
        $article = $this->repository->getEdit($id);
        $data = $request->all();

        $result = $article->update($data);

        return $this->updateResponse($result, $id);
    }

    public function mainImage($id, ApiArticlesMainImageRequest $request, ArticleImagesServices $services)
    {
        $res = $services->replaceMainImage($id, $request->file()['file']);

        return $this->updateResponse($res, $id);
    }

    public function deleteImage(ApiArticlesDeleteImageRequest $request, ArticleImagesServices $services)
    {
        $res = $services->deleteImage($request->input('path'));

        return $this->deleteImageResponse($res);
    }

    public function uploadImage($id, ApiArticlesUploadImageRequest $request, ArticleImagesServices $service)
    {
        $res = $service->uploadImage($id, $request->file()['image']);

        return $this->uploadImageResponse($res);
    }

    private function deleteImageResponse($res)
    {
        if ($res)
        {
            return ['success' => true, 'msg' => ['Картинка успешно удалена']];
        } else
        {
            return ['success' => false, 'msg' => ['Нельзя удалить заглавную картинку']];
        }

    }

    private function uploadImageResponse($res) {
        if ($res)
        {
            return ['success' => true, 'msg' => ['Картинка успешно загружена'], 'path' => $res];
        } else
        {
            return ['success' => false, 'msg' => ['Не найдена соответствующая статья']];
        }

    }
}
