<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'icon_url',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function newspapers(){
        return $this->hasMany(Newspaper::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function likes(){
        return $this->hasMany(Like::class);
    }

    public function getIconUrlAttribute($value): ?string
    {
        if ($value) {
            if ($value == 'default_icon' || $value == 'assets/images/default_icon.jpeg') {
                return url('/assets/images/default_icon.jpeg');
            }
            if (preg_match('/^https?:\/\//', $value) || str_starts_with($value, '/api/storage/') || str_starts_with($value, 'api/storage/')) {
                return $value;
            }
            return url('/api/storage/' . $value);
        }
        return $value;
    }
}
