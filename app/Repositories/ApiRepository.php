<?php


namespace App\Repositories;


abstract class ApiRepository extends CoreRepository
{
    protected function addOrder($builder, $options) {
        if(isset($options['orderBy'])) {
            $builder = $builder->orderBy($options['orderBy'], $options['order']);
        }
        return $builder;
    }
    protected function addFilters($builder, $option) {
        foreach ($option as $k => $v) {
            if($k !== 'order' && $k !== 'orderBy') {
                $builder = $builder->where($k, $v[0], $v[1]);
            }
        }
        return $builder;
    }
}
