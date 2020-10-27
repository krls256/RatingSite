<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reviews extends Model
{
    use SoftDeletes, Timestamp;

    protected $primaryKey = 'review_id';

    public function company() {
        return $this->belongsTo(Companies::class, 'company_id');
    }
}
