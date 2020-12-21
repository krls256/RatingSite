<?php


namespace App\Repositories\Headers;


use App\Repositories\CoreRepository;
use App\Models\Headers as Model;

class SeederHeadersRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function shoreHeadersBase($data) {
        $r = true;
        foreach ($data as $d) {
            $r = $this->startCondition()
                ->create($d);
        }
        return $r;
    }
}
