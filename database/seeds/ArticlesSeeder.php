<?php

use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Database\Seeder;
use App\BaseClassExtentions\File\FileWithWebMethods as File;
use App\Repositories\Articles\ApiArticlesRepository;


class ArticlesSeeder extends Seeder
{
    private $storage;

    public function __construct() {
        $this->storage = Storage::disk('resources');
    }

    /**
     * Run the database seeds.
     *
     * @param ApiArticlesRepository $articlesRepository
     * @return void
     */
    public function run(ApiArticlesRepository $articlesRepository, \Illuminate\Http\Request $request)
    {


        $articlesFolder = $this->storage->allDirectories('base_articles');
        foreach ($articlesFolder as $k => $v)
        {
            $data = $this->getArticleData($v);
            // should be rewritten
            $request->merge($data);

            unset($data['main']);
            unset($data['other-photos']);

            $articlesRepository->createArticle($data);
        }
    }

    private function getArticleData($v) {
        $files = $this->storage->allFiles($v);
        $data = [];
        $data['other-photos'] = [];

        foreach ($files as $key => $value)
        {
            $this->importFile($key, $value, $data);
        }
        return $data;
    }

    private function importFile($key, $value, &$data) {
        if (strpos($value, '.json'))
        {
            try
            {
                $jsonData = json_decode($this->storage->get($value));
                $data['article_title'] = $jsonData->title;
                $data['article_description'] = $jsonData->description;
                $data['article_content'] = $jsonData->content;
            } catch (FileNotFoundException $e)
            {
                dd('Файл не найден', $e);
            }
        } else
        {
            $file = new File('resources/' . $value);
            $data['other-photos'][] = $file;
            if ($key === 0)
            {
                $data['main'] = $file;
            }
        }
    }
}
