<?php


namespace App\Repositories;


abstract class CoreRepository
{
    private $model;

    abstract protected function getModelClass();

    public function __construct() {
        $this->model = app($this->getModelClass());
    }

    protected function startCondition() {
        return $this->model;
    }
}
