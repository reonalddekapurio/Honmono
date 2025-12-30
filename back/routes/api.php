<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CommentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('news')->group(function() {
    Route::post('/{newspaper_id}/comments',[CommentController::class, 'store']);
});