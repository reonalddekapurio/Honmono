<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\NewspaperController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('news')->group(function () {
    Route::get('/', [NewspaperController::class, 'index']);
});