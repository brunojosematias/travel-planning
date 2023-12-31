<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GymController;
use App\Http\Controllers\LocalController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TripController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('guest')->group(function () {
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);
});

Route::middleware('auth:sanctum')->group(function () {
    // Autenticação
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::put('/auth/update', [AuthController::class, 'update']);
    Route::put('/auth/updatePhoto', [AuthController::class, 'updatePhoto']);
    // Viagens
    Route::post('/trip/register', [TripController::class, 'register']);
    Route::put('/trip/finish/{id}', [TripController::class, 'finish']);
    Route::put('/trip/update/{id}', [TripController::class, 'update']);
    Route::get('/trip/show/{id}', [TripController::class, 'show']);
    Route::get('/trip/showAll', [TripController::class, 'showAll']);
    Route::get('/local/up', [LocalController::class, 'up']);
    Route::get('/local/down', [LocalController::class, 'down']);
    Route::get('/local/list', [LocalController::class, 'list']);
});
