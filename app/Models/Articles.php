<?php

namespace App\Models;

use App\Models\Traits\GetFillableTrait;
use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    use Timestamp, GetFillableTrait;

    protected $primaryKey = 'article_id';

    protected $fillable = [
        'article_title',
        'article_main_image',
        'article_description',
        'article_content',
        'is_published'
    ];

    public function getLinkWithDirAttribute()
    {
        return '/img/articles/'.$this->article_main_image;
    }
}
