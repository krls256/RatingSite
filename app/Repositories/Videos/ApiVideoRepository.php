<?php


namespace App\Repositories\Videos;


use App\Repositories\CoreRepository;
use App\Models\Videos as Model;

class ApiVideoRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getPaginate($count = 20)
    {
        $column = ['video_id', 'video_title', 'video_slug'];

        $response = $this->startCondition()
            ->select($column)
            ->orderBy('video_id')
            ->paginate($count);

        return $response;
    }

    public function getEdit($id)
    {
        $column = ['video_id', 'video_title', 'video_description', 'video_link', 'video_slug'];

        $response = $this->startCondition()
            ->select($column)
            ->where('video_id', $id)
            ->first();

        return $response;
    }
}
