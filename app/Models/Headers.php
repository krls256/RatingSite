<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class Headers extends Model
{
    use Timestamp;

    protected $primaryKey = 'header_id';

    protected $fillable = [
        'header_value', 'header_description'
    ];
}
