<?php

use App\Repositories\Articles\ApiArticlesRepository;
use App\Services\FSServices\ArticleFSService;
use Illuminate\Database\Seeder;


class ArticlesSeeder extends Seeder
{
    private $fsService;

    public function __construct()
    {
        $this->fsService = new ArticleFSService();
    }

    /**
     * Run the database seeds.
     *
     * @param ApiArticlesRepository $articlesRepository
     * @return void
     */
    public function run(ApiArticlesRepository $articlesRepository, \Illuminate\Http\Request $request)
    {
        $articlesData = $this->fsService->getArticlesFromResources();

        $articlesData->each(function ($data) use ($request, $articlesRepository)
        {
            $request->merge($data);
            unset($data['main']);
            unset($data['other-photos']);
            $articlesRepository->createArticle($data);
        });

    }
}
