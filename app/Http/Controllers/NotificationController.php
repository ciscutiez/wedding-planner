<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    // Display notifications
    public function index()
    {
        // Assuming you have a User model with notifications
        $notifications = auth()->user()->notifications;

        return Inertia::render('Notifications/Index', [
            'notifications' => $notifications,
        ]);
    }

    // Mark all notifications as read
    public function markAllAsRead()
    {
        auth()->user()->unreadNotifications->markAsRead();

        return redirect()->route('notifications.index');
    }

    // Mark a single notification as read
    public function markAsRead($id)
    {
        $notification = auth()->user()->notifications->find($id);

        if ($notification) {
            $notification->markAsRead();
        }

        return redirect()->route('notifications.index');
    }
}
