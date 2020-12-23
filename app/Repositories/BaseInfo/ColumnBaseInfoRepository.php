<?php


namespace App\Repositories\BaseInfo;


use App\Repositories\DBOrientedCoreRepository;
use Illuminate\Database\Connection as Facade;

class ColumnBaseInfoRepository extends DBOrientedCoreRepository
{
    protected function getWorkingFacade()
    {
        return Facade::class;
    }
    public function getTableColumns($tableName) {
        $response = $this->startCondition()->getSchemaBuilder()->getColumnListing($tableName);
        dd($response);
    }
}
