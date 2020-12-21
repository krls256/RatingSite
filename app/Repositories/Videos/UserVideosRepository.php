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
        $column = ['video_id', 'video_ytid', 'video_title', 'video_description'];

        $response = $this->startCondition()
            ->select($column)
            ->orderBy('video_id', 'desc')
            ->paginate($count);

        return $response;
    }
}
