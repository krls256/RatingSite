<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class SEOAttributes extends Model
{
    use Timestamp;

    protected $primaryKey = 'id';

    protected $fillable = [
       'title', 'description', 'keywords'
    ];
}
