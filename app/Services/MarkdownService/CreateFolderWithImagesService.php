<?php


namespace App\Services\MarkdownService;


use App\Models\Articles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class CreateFolderWithImagesService
{
    private $request;
    private $writeTo;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function index(Articles $articles)
    {
        $this->writeTo = $writeTo = 'articles/' . $articles->getFolderName();
        $fileName = $this->createMainPhoto();
        $fileArr = $this->createOthersFiles();

        return [
            'folder' => $this->writeTo.'/',
            'main' => '/storage/'.$this->writeTo.'/'.$fileName,
            'other' => $fileArr
        ];
    }

    private function createMainPhoto()
    {
        $file = $this->request['main'];
        $fileName = 'main.' . $file->extension();
        $res = Storage::disk('publicStorage')
            ->putFileAs($this->writeTo, $file, $fileName);
        return $fileName;
    }

    private function createOthersFiles()
    {
        $data = $this->request['other-photos'];
        $arr = [];

        foreach ($data as $k => $v)
        {
            $path = Storage::disk('publicStorage')
                ->putFile($this->writeTo, $v);
            $arr[$v->getClientOriginalName()] = '/storage/' . $path;
        }
        return $arr;
    }
}
