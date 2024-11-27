<?php

namespace App\Http\Controllers;

use App\Models\Guest;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',             // Name is required and should be a string with a max length of 255 characters
            'rsvp' => 'required|boolean',                     // RSVP is required and should be a boolean
            'meal_preference' => 'nullable|string|max:255',  // Meal preference is optional but should be a string with a max length of 255 characters
        ]);

        try {

            Guest::create($request->only(['name', 'rsvp', 'meal_preference']));


            return redirect()->route('guests.index')->with('success', 'Guest added successfully!');
        } catch (\Exception $e) {

            return redirect()->route('guests.index')->with('error', 'Failed to add guest: ' . $e->getMessage());
        }
    }

    public function index()
    {

        $guests = Guest::paginate(10);


        return inertia('Guests/Index', compact('guests'));
    }
}
