<?php

namespace App\Models;

use App\Models\Traits\GetFillableTrait;
use App\Models\Traits\NecessaryToCreateTrait;
use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class Videos extends Model
{
    use Timestamp, GetFillableTrait;

    protected $primaryKey = 'video_id';

    protected $fillable = [
        'video_title',
        'video_ytid',
        'video_description',
        'is_published'
    ];
}
