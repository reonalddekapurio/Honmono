<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Newspaper;
use App\Models\Comment;
use App\Models\Image;
use App\Models\Like;
use Carbon\Carbon;

class NewspaperController extends Controller
{
    public function ranking() {

        $user = Auth::user();
        // 今月初めと終わりを取得
        $startOfMonth = Carbon::now()->startOfMonth();
        $endOfMonth = Carbon::now()->endOfMonth();

        $ranking = Newspaper::query()
            // 今月の投稿に絞り込み
            ->whereBetween('created_at', [$startOfMonth, $endOfMonth])
            ->withCount('likes')
            // いいねが多い順
            ->orderByDesc('likes_count')->orderByDesc('created_at')->take(100)
            ->with('user')->get();
        
        // 指定のレスポンス形式に整形
        $data = $ranking->map(function ($newspaper, $index) use ($user) {
            return [
                'rank' => $index + 1,
                'id' => $newspaper->id,
                'title' => $newspaper->title,
                'likes_count' => $newspaper->likes_count,
                // ログイン中なら、その新聞に自分のいいねがあるか判定
                'is_liked' => $user ? $newspaper->likes()->where('user_id', $user->id)->exists() : false,
                'user' => [
                    'id' => $newspaper->user->id,
                    'name' => $newspaper->user->name,
                    'icon_url' => $newspaper->user->icon_url,
                ]
            ];
        });
        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }

    public function topics() {
        $user = Auth::id();

        $topics = Newspaper::query()->whereDate('created_at', Carbon::today())
            ->withCount(['likes', 'comments'])
            // 自分がいいねしたか
            ->withExists(['likes as is_liked' => function ($query) use ($user) {
                $query->where('user_id', $user);
            }])
            ->with('user')->orderByDesc('likes_count')->take(3)->get();

        // レスポンス整形
        $data = $topics->map(function ($newspaper) {
            return [
                'id' => $newspaper->id,
                'title' => $newspaper->title,
                'description' => $newspaper->description,
                'user' => [
                    'id' => $newspaper->user->id,
                    'name' => $newspaper->user->name,
                    'icon_url' => $newspaper->user->icon_url,
                ],
                'likes_count' => $newspaper->likes_count,
                'comments_count' => $newspaper->comments_count,
                'is_liked' => (bool)$newspaper->is_liked,
                'created_at' => $newspaper->created_at->toIso8601String(), // ISO8601形式
            ];
        });

        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }
}
