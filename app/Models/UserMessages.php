<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;

class UserMessages extends Model
{
    use Timestamp;
    protected $primaryKey = 'message_id';

    protected $fillable = [
        'user_name',
        'user_email',
        'user_message',
        'is_checked',
        'is_send'
    ];
}
