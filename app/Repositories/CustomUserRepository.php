<?php


namespace App\Repositories;

use App\Models\User as Model;

class CustomUserRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function createAdmin($data)
    {
        return $this->startCondition()
            ->create($data);
    }
}
