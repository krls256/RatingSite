<?php


namespace App\Repositories;


abstract class DBOrientedCoreRepository
{
    private $Facade;
    abstract protected function getWorkingFacade();

    public function __construct() {
        $this->Facade = $this->getWorkingFacade();
    }

    protected function startCondition() {
        return app($this->Facade);
    }
}
