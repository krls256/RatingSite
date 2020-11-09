<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ApiArticleUpdateRequest;
use App\Repositories\Articles\ApiArticlesRepository;
use Illuminate\Http\Request;

class ApiArticlesController extends ApiController
{
    private $repository;

    public function __construct(ApiArticlesRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $articles = $this->repository->getPaginate();

        return $articles;
    }

    public function edit($id)
    {
        $article = $this->repository->getEdit($id);

        return $article;
    }

    public function update(ApiArticleUpdateRequest $request, $id)
    {
        $article = $this->repository->getEdit($id);
        $data = $request->all();

        $result = $article->update($data);

        if($result)
            return ['msg' => ['База была успешно обновлена', "Id обновленной статьи равен $id"]];
        return ['msg' => ['Что-то пошло не так']];
    }

}
