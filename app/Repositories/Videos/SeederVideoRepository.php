<?php


namespace App\Repositories\Videos;


use App\Repositories\CoreRepository;
use App\Models\Videos as Model;

class SeederVideoRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }
    public function createVideo($data) {
        return $this->startCondition()
            ->create($data);
    }
}
