<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        // $events = Event::all(); // Assuming you have an Event model
        return Inertia::render('Events/EventList');
    }

    public function create()
    {
        return Inertia::render('Events/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'status' => 'required|string|max:50',
        ]);

    

        return redirect()->route('events.eventlist')->with('success', 'Event created successfully.');
    }
}
