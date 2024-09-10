<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstName',
        'lastName',
        'email',
        'phone',
        'address',
        'notes',
        'clientReference',
        'workInquiry',
        'extra_option',
    ];

    protected $casts = [
        'extra_option' => 'array',
        'created_at' => 'datetime:Y-m-d H:i:s',
    ];
}
