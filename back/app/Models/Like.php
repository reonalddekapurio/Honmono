<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Like extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'newspaper_id',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function newspapers() {
        return $this->belongsTo(Newspaper::class);
    }
}
