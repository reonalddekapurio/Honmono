<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'newspaper_id',
        'url',
    ];

    public function newspaper(){
        return $this->belongsTo(Newspaper::class);
    }
}
