<?php

namespace App\Models;

use Carbon\Carbon;
use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ReviewAnswers extends Model
{
    use Timestamp, SoftDeletes;

    protected $fillable = [
        'reviewer_answer_name',
        'review_answer_text',
        'review_id'
    ];

    public function getBeautifulDateAttribute()
    {
        try
        {
            $date = new Carbon($this->created_at);
            $date = $date->isoFormat('DD.MM.YYYY');
        } catch (\Exception $e)
        {
            $date = null;
        }

        return $date;
    }
}
