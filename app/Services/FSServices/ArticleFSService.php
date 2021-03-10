<?php


namespace App\Services\FSServices;


use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\BaseClassExtentions\File\FileWithWebMethods as File;

class ArticleFSService
{
    protected $storage;

    public function __construct()
    {
        $this->storage = Storage::disk('publicStorage');
    }


    public function lsResources($dir) {
        $this->storage = Storage::disk('resources');
        return collect($this->storage->allDirectories($dir));
    }

    public function filesPublicStorage($dir) {
        return $this->storage->allFiles($dir);
    }

    public function getImagesExceptMain($dir) {
        $res = collect($this->storage->allFiles($dir));
        $res = $res->filter(function ($item) {
            return !preg_match('/\/main./', $item);
        })->values();
        return $res;
    }

    public function deleteArticleFile($path) {
        $this->storage = Storage::disk('publicStorage');
        $res = $this->storage->delete($path);

        return $res;
    }

    public function storeFile($path, $file) {
        $this->storage = Storage::disk('publicStorage');

        return $this->storage->putFile($path, $file);
    }

    public function createMainPhoto($dir, $file) {
        $this->storage = Storage::disk('publicStorage');

        $dir = substr($dir, -1) === '/' ? $dir : $dir.'/';
        $fileName = 'main' .'.'. $file->extension();
        $res = $this->storage
            ->putFileAs($dir, $file, $fileName);

        return ['result' => $res, 'fileName' => '/storage/'.$dir.$fileName];
    }

    public function getArticlesFromResources() {
        $this->storage = Storage::disk('resources');
        $dirs = $this->lsResources('base_articles');

        return $dirs->map(function ($dir) {
           return $this->getArticleData($dir);
        });
    }

    private function getArticleData($dir) {
        $files = $this->storage->allFiles($dir);
        $data = [];
        $data['other-photos'] = [];

        foreach ($files as $key => $value)
        {
            $this->importResourcesFile($key, $value, $data);
        }
        return $data;
    }

    private function importResourcesFile($key, $value, &$data) {
        if (strpos($value, '.json'))
        {
            $jsonData = $this->readJSON($value);
            $data['article_title'] = $jsonData->title;
            $data['article_description'] = $jsonData->description;
            $data['article_content'] = $jsonData->content;
        } else
        {
            $file = new File('resources/' . $value);
            $data['other-photos'][] = $file;
            if ($key === 0)
                $data['main'] = $file;
        }
    }

    public function readJSON($value) {
        return json_decode($this->storage->get($value));
    }

}
