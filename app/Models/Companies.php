<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Companies extends Model
{
    use SoftDeletes, Timestamp;

    protected $primaryKey = 'company_id';

    public function reviews() {
       return $this->hasMany(Reviews::class, 'company_id');
    }
}
