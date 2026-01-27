<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\NewspaperController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::prefix('account')->group(function(){
    Route::post('/', [AccountController::class, 'store']);
    Route::get('/me', [AccountController::class, 'me']);
    Route::post('/login', [AccountController::class, 'login']);
    Route::patch('/update-me', [AccountController::class, 'updateMe']);
});

Route::prefix('news')->group(function() {
    Route::get('/', [NewspaperController::class, 'index']);
    Route::post('/', [NewspaperController::class, 'create']);
    Route::get('/{id}', [NewspaperController::class, 'show']);
    Route::post('/{newspaper_id}/comments', [CommentController::class, 'store']);
    Route::get('/ranking', [NewspaperController::class, 'ranking']);
    Route::get('/topics', [NewspaperController::class, 'topics']);
});
