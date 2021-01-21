<?php


namespace App\Repositories\Videos;


use App\Repositories\ApiRepository;
use App\Models\Videos as Model;
use Illuminate\Support\Str;

class ApiVideoRepository extends ApiRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getPaginate($count = 20, $options = [])
    {
        $column = ['video_id', 'video_title', 'video_slug', 'is_published'];

        $response = $this->startCondition()->select($column);
        $response = $this->addOrder($response, $options);
        $response = $this->addFilters($response, $options);
        $response = $response->paginate($count);

        return $response;
    }

    public function getEdit($id)
    {
        $column = ['video_id', 'video_title', 'video_description', 'video_ytid', 'video_slug', 'is_published'];

        $response = $this->startCondition()
            ->select($column)
            ->where('video_id', $id)
            ->first();

        return $response;
    }

    public function createVideo($data) {
        $result = $this->startCondition()
            ->create($data);

        return $result;
    }
}
