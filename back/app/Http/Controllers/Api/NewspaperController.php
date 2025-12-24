<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Newspaper;
use App\Models\Image;
use App\Models\Like;

class NewspaperController extends Controller
{
    public function index() {
        $user = auth()->id();

        $newspapers = Newspaper::with([
            'user:id,name,icon_url', 
            'images'
            ])->withCount([
                'likes as likes_count', 
                'comments as comment_count'
            ])->withExists([
                'likes as is_liked' => function($query) use ($user) {
                $query->where(
                    'user_id', 
                    $user
                );
                // 新しい順で取得
            }])->latest()->get();
        
            // 0,1をbooleanに変換
            $newspapers->transform(function ($item) {
                $item->is_liked = (bool)$item->is_liked;
                return $item;
            });

            return response()->json([
                'status' => 'success',
                'data' => $newspapers
            ]);
        }
}
