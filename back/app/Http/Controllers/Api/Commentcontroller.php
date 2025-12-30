<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\Newspaper;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    // コメント一覧取得
    public function index() {
        //
    }

    // ニュースにコメントを返信
    public function store(Request $request, Newspaper $newspaper) {
        $user = 1;

        $comment = $request->validate([
            'contents' => 'required|string|max:120',
        ]);

        $comment = Comment::create([
            'user_id' => $user,
            'newspaper_id' => $request->newspaper_id,
            'contents' => $request->contents,
        ]);

        return response()->json([
            'status' => 'success',
            'date' => [
                'id' => $comment->id,
                'user_id' => $comment->user_id,
                'news_id' => $comment->newspaper_id,
                'contents' => $comment->contents,
                'icon_url' => $comment->user->icon_url ?? null,
                'created_at' => $comment->created_at->toISOString(),
            ]
            ], 201);
    }
}
