<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class UserMessages extends Model
{
    use Timestamp;

    protected $fillable = [
        'user_name',
        'user_email',
        'user_message',
    ];
}
