<?php


namespace App\Services\ApiFilterServices;


use App\Repositories\BaseInfo\ColumnBaseInfoRepository;

class ApiFilterPrepareService
{
    private $column;
    public function __construct($tableName) {
        $repository = new ColumnBaseInfoRepository();
        $this->column = $repository->getTableColumns($tableName);
    }

    public function prepareData($dirtyData) {
        $pureData = [];
        if(isset($dirtyData['orderBy']) && in_array($dirtyData['orderBy'], $this->column)) {
            $pureData['orderBy'] = $dirtyData['orderBy'];
        }
        if(isset($dirtyData['order']))
        {
            $pureData['order'] = $dirtyData['order'] === 'desc' ? 'desc' :'asc';
        }
        foreach ($dirtyData as $k => $v) {
            if(in_array($k, $this->column)) {
                $this->replaceKeywords($pureData, $k, $v);
            }
        }
        return $pureData;
    }

    private function replaceKeywords(&$pureData, $k, $v) {
        $data = explode(',', $v);
        switch ($data[0]) {
            case 'equal': $pureData[$k] = ['=', $data[1]];break;
            case 'more-equal': $pureData[$k] = ['>=', $data[1]];break;
            case 'less-equal': $pureData[$k] = ['<=', $data[1]];break;
            case 'more': $pureData[$k] = ['>', $data[1]];break;
            case 'less': $pureData[$k] = ['<', $data[1]];break;
        }
    }

}
