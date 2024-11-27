<?php

use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\BudgetController;
use App\Http\Controllers\CountdownController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\VendorController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home page route
Route::get('/', function () {
    return Inertia::render('Home');
});
Route::get('/countdown', function () {
    return Inertia::render('Countdown');
});
// Route::get('/countdown', [CountdownController::class, 'getTargetDate']);

// Event List route
Route::get('/eventlist', function () {
    return Inertia::render('Events/EventList');
});

// Event Management Route (Add/Edit Event)
Route::get('/events', [EventController::class, 'index'])->middleware('auth')->name('events.index');
Route::get('/events/create', [EventController::class, 'create'])->middleware('auth')->name('events.create');
Route::post('/events', [EventController::class, 'store'])->middleware('auth')->name('events.store');
Route::get('/events/{event}/edit', [EventController::class, 'edit'])->middleware('auth')->name('events.edit');
Route::put('/events/{event}', [EventController::class, 'update'])->middleware('auth')->name('events.update');
Route::delete('/events/{event}', [EventController::class, 'destroy'])->middleware('auth')->name('events.destroy');

// Task List Route
Route::get('/tasks', [TaskController::class, 'index'])->middleware('auth')->name('tasks.index');
Route::get('/tasks/create', [TaskController::class, 'create'])->middleware('auth')->name('tasks.create');
Route::post('/tasks', [TaskController::class, 'store'])->middleware('auth')->name('tasks.store');
Route::get('/tasks/{task}/edit', [TaskController::class, 'edit'])->middleware('auth')->name('tasks.edit');
Route::put('/tasks/{task}', [TaskController::class, 'update'])->middleware('auth')->name('tasks.update');
Route::delete('/tasks/{task}', [TaskController::class, 'destroy'])->middleware('auth')->name('tasks.destroy');

// Vendor Management Routes
Route::get('/vendors', [VendorController::class, 'index'])->middleware('auth')->name('vendors.index');
Route::get('/vendors/create', [VendorController::class, 'create'])->middleware('auth')->name('vendors.create');
Route::post('/vendors', [VendorController::class, 'store'])->middleware('auth')->name('vendors.store');
Route::get('/vendors/{vendor}/edit', [VendorController::class, 'edit'])->middleware('auth')->name('vendors.edit');
Route::put('/vendors/{vendor}', [VendorController::class, 'update'])->middleware('auth')->name('vendors.update');
Route::delete('/vendors/{vendor}', [VendorController::class, 'destroy'])->middleware('auth')->name('vendors.destroy');

// Guest List Route
Route::get('/guests', [GuestController::class, 'index'])->middleware('auth')->name('guests.index');
Route::get('/guests/create', [GuestController::class, 'create'])->middleware('auth')->name('guests.create');
Route::post('/guests', [GuestController::class, 'store'])->middleware('auth')->name('guests.store');
Route::get('/guests/{guest}/edit', [GuestController::class, 'edit'])->middleware('auth')->name('guests.edit');
Route::put('/guests/{guest}', [GuestController::class, 'update'])->middleware('auth')->name('guests.update');
Route::delete('/guests/{guest}', [GuestController::class, 'destroy'])->middleware('auth')->name('guests.destroy');

// Budget Tracker Routes
Route::get('/budget', [BudgetController::class, 'index'])->middleware('auth')->name('budget.index');
Route::get('/budget/create', [BudgetController::class, 'create'])->middleware('auth')->name('budget.create');
Route::post('/budget', [BudgetController::class, 'store'])->middleware('auth')->name('budget.store');

// Notifications Route
Route::get('/notifications', [NotificationController::class, 'index'])->middleware('auth')->name('notifications.index');

// Data Analytics Route
Route::get('/analytics', [AnalyticsController::class, 'index'])->middleware('auth')->name('analytics.index');

// Dashboard route, protected by middleware for authenticated users
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile routes for authenticated users
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Require auth routes (login, registration, etc.)
require __DIR__ . '/auth.php';
