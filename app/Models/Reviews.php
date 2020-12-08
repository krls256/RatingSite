<?php

namespace App\Models;

use Carbon\Carbon;
use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reviews extends Model
{
    use SoftDeletes, Timestamp;

    protected $primaryKey = 'review_id';

    protected $fillable = [
        'is_published',
        'review_text',
        'reviewer_name',
        'review_date',
        'review_mark',
        'source_id',
        'review_link',

        'company_id'
    ];

    public function company() {
        return $this->belongsTo(Companies::class, 'company_id');
    }

    public function images() {
        return $this->hasMany(Images::class, 'review_id');
    }

    public function answers() {
        return $this->hasMany(ReviewAnswers::class, 'review_id');
    }

    public function getBeautifulDateAttribute()
    {
        try
        {
            $date = new Carbon($this->review_date);
            $date = $date->isoFormat('DD.MM.YYYY');
        } catch (\Exception $e)
        {
            $date = null;
        }

        return $date;
    }
}
