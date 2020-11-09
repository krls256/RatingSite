<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class Videos extends Model
{
    use Timestamp;

    protected $fillable = [
        'video_title',
        'video_link',
        'video_description'
    ];
}
