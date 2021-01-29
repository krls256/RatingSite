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

    public function replaceData($replace) {
        $this->title = str_replace('(data)', $replace, $this->title);
        $this->description = str_replace('(data)', $replace, $this->description);
        $this->keywords = str_replace('(data)', $replace, $this->keywords);
    }
}
