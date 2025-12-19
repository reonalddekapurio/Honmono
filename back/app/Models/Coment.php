<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Coment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'newspaper_id',
        'content',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function newspaper(){
        return $this->belongsTo(Newspaper::class);
    }
}