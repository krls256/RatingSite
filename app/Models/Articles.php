<?php

namespace App\Models;

use App\Models\Traits\GetFillableTrait;
use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Articles extends Model
{
    use Timestamp, GetFillableTrait;

    protected $primaryKey = 'article_id';


    protected $fillable = [
        'article_title',
        'article_description',
        'article_content',
        'is_published'
    ];

    public function getLinkWithDirAttribute()
    {
        return '/img/articles/' . $this->article_main_image;
    }

    public function getFolderName()
    {
        return $this->article_id ?? $this->getNextId() . '-' . $this->article_folder_suffix;
    }

    protected function getNextId() {
        $statement = DB::select("show table status like '".$this->table."'");
        return $statement[0]->Auto_increment;
    }
}
