<?php


namespace App\Models\Traits;


trait GetFillableTrait
{
    public function getFillable() {
        return $this->fillable;
    }
}
