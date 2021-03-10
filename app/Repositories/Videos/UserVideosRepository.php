<?php


namespace App\Repositories\Videos;

use App\Models\Videos as Model;
use App\Repositories\CoreRepository;

class UserVideosRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getVideosPaginate($count = 15) {
        $column = ['video_id', 'video_ytid', 'video_title', 'video_description', 'is_published'];
        $ytid = request()->input('ytid');

        $fResponse = $this->startCondition()
            ->select($column)
            ->where('is_published', 1)
            ->orderBy('video_id', 'desc')
            ->paginate($count);



        if($ytid) {
            $sResponse = $this->startCondition()
                ->select($column)
                ->where('is_published', 1)
                ->where('video_ytid', $ytid)
                ->first();
            if($fResponse->getCollection()->where('video_ytid', $ytid)->first() === null)
                $fResponse->getCollection()->add($sResponse);
        }

        return $fResponse;
    }

    public function getSomeLastVideos($count = 2) {
        $column = ['video_id', 'video_ytid', 'video_title', 'is_published'];
        $res = $this->startCondition()
            ->select($column)
            ->orderBy('video_id', 'desc')
            ->take($count)
            ->get();
        return $res;
    }
}
