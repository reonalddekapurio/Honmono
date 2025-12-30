<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Newspaper;
use App\Models\Like;

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

        // 1. テストユーザーを複数作成
        $user = User::create([
            'name' => 'Me',
            'email' => 'me@example.com',
            'password' => bcrypt('password'),
            'icon_url' => 'assets/images/default_icon.jpeg',
        ]);

        $otherUsers = User::factory(10)->create();

        // 2. 新聞を100件作成
        for ($i = 1; $i <= 100; $i++) {
            $newspaper = Newspaper::create([
                'user_id' => $otherUsers->random()->id,
                'title' => "ランキングテスト新聞 第{$i}号",
                'description' => 'テスト内容',
                // 先月のデータが混ざらないよう、今月のランダムな日付にする
                'created_at' => now()->subDays(rand(0, 20)),
            ]);

            // 3. ランダムな数の「いいね」を付ける
            // IDが若い新聞ほど「いいね」が多くなるように調整（ランキング確認用）
            $likeCount = 101 - $i; 
            for ($j = 0; $j < $likeCount; $j++) {
                Like::create([
                'user_id' => $otherUsers->random()->id,
                'newspaper_id' => $newspaper->id,
            ]);
            }

            // 自分の「is_liked」を確認するため、1位の記事だけ自分がいいねしておく
            if ($i === 1) {
                Like::create([
                    'user_id' => $user->id,
                    'newspaper_id' => $newspaper->id,
                ]);
            }
        }
    }
}
