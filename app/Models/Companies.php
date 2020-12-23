<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Companies extends Model
{
    use SoftDeletes, Timestamp;

    protected $fillable = [
        'company_address',
        'company_city',
        'company_creating_date',
        'company_description',
        'company_description_styles',
        'company_email',
        'company_fb',
        'company_instagram',
        'company_logo_link',
        'company_mark_difference',
        'company_name',
        'company_ok',
        'company_phone',
        'company_site',
        'company_slug',
        'company_telegram',
        'company_tin',
        'company_twitter',
        'company_viber',
        'company_vk',
        'company_whatsapp',
        'company_yandex_map_link',
        'is_published',


        'company_average_mark',
        'company_average_mark_flamp',
        'company_average_mark_google',
        'company_average_mark_otzovick',
        'company_average_mark_yandex',
        'company_average_mark_yell',
        'company_positive',
        'company_negative',
        'company_quantity_review',
        'company_quantity_review_flamp',
        'company_quantity_review_google',
        'company_quantity_review_otzovick',
        'company_quantity_review_yandex',
        'company_quantity_review_yell',
    ];

    protected $primaryKey = 'company_id';

    public function reviews() {
       return $this->hasMany(Reviews::class, 'company_id');
    }

    public function getSelfCollection() {
        return collect()->push($this);
    }

    public function replaceName($str, $replace) {
        return str_replace($replace, $this->company_name, $str);
    }
}
