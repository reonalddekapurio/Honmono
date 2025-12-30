<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Newspaper;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. テスト用ユーザーの作成
        $user = User::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'icon_url' => 'assets/images/default_icon.jpeg',
            'password' => bcrypt('password'),
        ]);

        // 2. テスト用新聞の作成
        $newspaper = Newspaper::create([
            'user_id' => $user->id,
            'title' => 'テスト新聞タイトル',
            'description' => 'これはテスト用の新聞記事です。',
        ]);
    }
}
