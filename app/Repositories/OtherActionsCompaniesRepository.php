<?php


namespace App\Repositories;

use App\Models\Companies as Model;

class OtherActionsCompaniesRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function createNewCompany($data) {
        $result = $this->startCondition()->create($data);

        if($result) {
         return true;
        } else {
            throw new \Exception("Новая компания не создалась!");
        }
    }
}
