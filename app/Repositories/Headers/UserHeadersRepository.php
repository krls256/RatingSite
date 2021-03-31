<?php


namespace App\Repositories\Headers;


use App\Repositories\CoreRepository;
use App\Models\Headers as Model;
use PhpParser\Node\Expr\AssignOp\Mod;

class UserHeadersRepository extends CoreRepository
{
    protected function getModelClass()
    {
        return Model::class;
    }

    public function getHeadersByKeys($keys, $replacements = []) {
        $column = ['header_id', 'header_key', 'header_value'];
        $response = $this->startCondition()
            ->select($column)
            ->whereIn('header_key', $keys)
            ->toBase()
            ->get()
            ->keyBy(function ($value, $key) use ($replacements) {
                return $replacements[$value->header_key] ?? $value->header_key;
            })
            ->map(function ($item) {
               return $item->header_value;
            });
        return $response;
    }
}
