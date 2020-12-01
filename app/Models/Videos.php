<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class Videos extends Model
{
    use Timestamp;

    protected $primaryKey = 'video_id';

    protected $fillable = [
        'video_title',
        'video_link',
        'video_description'
    ];
}
