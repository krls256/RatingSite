<?php


namespace App\Services\MarkdownService;


use App\Models\Articles;
use App\Services\FSServices\ArticleFSService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class CreateFolderWithImagesService
{
    private $request;
    private $writeTo;
    private $FSService;
    public function __construct(Request $request, ArticleFSService $FSService)
    {
        $this->FSService = $FSService;
        $this->request = $request;
    }

    public function index(Articles $articles)
    {
        $this->writeTo = 'articles/' . $articles->getFolderName();
        $fileName = $this->createMainPhoto();
        $fileArr = $this->createOthersFiles();

        return [
            'folder' => $this->writeTo.'/',
            'main' => $fileName,
            'other' => $fileArr
        ];
    }

    private function createMainPhoto()
    {
        $file = $this->request['main'];
        $res = $this->FSService->createMainPhoto($this->writeTo, $file);

        return $res['fileName'];
    }

    private function createOthersFiles()
    {
        $data = $this->request['other-photos'] ? $this->request['other-photos'] : [];
        $arr = [];

        foreach ($data as $k => $v)
        {
            $path = $this->FSService->storeFile($this->writeTo, $v);
            $arr[$v->getClientOriginalName()] = '/storage/' . $path;
        }
        return $arr;
    }
}
