<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NewspaperResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'created_at' => $this->created_at->toDateTimeString(),
            'user' => [
                'id' => $this->user->id,
                'name' => $this->user->name,
                'icon_url' => $this->user->icon_url,
            ],
            // 画像モデルのコレクションからURLの配列のみを抽出
            'images' => $this->images->pluck('url'), 
            // リレーションの数をカウント（またはlikes_count属性を使用）
            'likes' => $this->likes_count ?? $this->likes()->count(),
            // ログイン中のユーザーが「いいね」しているかの判定
            'is_liked' => auth()->check() ? $this->likes()->where('user_id', auth()->id())->exists() : false,
            'comments' => $this->comments->map(function ($comment) {
                return [
                    'id' => $comment->id,
                    'user' => [
                        'id' => $comment->user->id,
                        'name' => $comment->user->name,
                        'icon_url' => $comment->user->icon_url,
                    ],
                    'contents' => $comment->contents,
                ];
            }),
        ];
    }
}
