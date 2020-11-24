<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    use Timestamp;

    protected $primaryKey = 'article_id';

    protected $fillable = [
        'article_title',
        'article_slug',
        'article_main_image',
        'article_description',
        'article_content',
        'is_published'
    ];
}
