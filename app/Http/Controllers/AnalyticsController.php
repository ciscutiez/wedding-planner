<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnalyticsController extends Controller
{
    // Show dashboard with analytics data
    public function index()
    {
        // Example analytics data
        $eventCount = Event::count();
        $userCount = User::count();
        $recentEvents = Event::latest()->take(5)->get(); // Get 5 most recent events

        // You can pass more data as per your requirements
        return Inertia::render('Analytics/Index', [
            'eventCount' => $eventCount,
            'userCount' => $userCount,
            'recentEvents' => $recentEvents,
        ]);
    }

    // More complex analytics methods can be added here
    public function userRegistrations()
    {
        // Get user registrations over time (e.g., monthly)
        $userRegistrations = User::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->groupBy('month')
            ->orderBy('month')
            ->get();

        return Inertia::render('Analytics/UserRegistrations', [
            'userRegistrations' => $userRegistrations,
        ]);
    }

    public function eventMetrics()
    {
        // Example: Track events and their attendee counts
        $eventMetrics = Event::withCount('attendees')->get();

        return Inertia::render('Analytics/EventMetrics', [
            'eventMetrics' => $eventMetrics,
        ]);
    }
}
