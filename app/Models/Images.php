<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class Images extends Model
{
    use Timestamp;

    protected $fillable = [
        'is_published',
        'is_on_company_page',
        'image_link'
    ];

}
