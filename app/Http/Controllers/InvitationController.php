<?php
namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class InvitationController extends Controller
{
    public function index()
    {
        $invitations = Invitation::latest()->paginate(10);

        return inertia('Invitations/Index', [
            'invitations' => $invitations,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email',
            'role' => 'nullable|string',
            'message' => 'nullable|string',
        ]);

        $token = Str::uuid();

        // Save the invitation
        $invitation = Invitation::create([
            'email' => $validated['email'],
            'role' => $validated['role'],
            'message' => $validated['message'],
            'token' => $token,
        ]);

        // Send an email with the invitation link
        Mail::raw("You are invited! Use this link to accept: " . url("/invite/accept?token={$token}"), function ($message) use ($validated) {
            $message->to($validated['email'])->subject('You are invited!');
        });

        return redirect()->back()->with('success', 'Invitation sent successfully!');
    }

    public function accept(Request $request)
    {
        $token = $request->query('token');

        $invitation = Invitation::where('token', $token)->first();

        if (!$invitation || $invitation->used) {
            return redirect()->route('home')->with('error', 'Invalid or expired invitation.');
        }

        // Mark the invitation as used
        $invitation->update(['used' => true]);

        // Optionally, redirect to a registration or onboarding page
        return inertia('Invitations/Accept', [
            'email' => $invitation->email,
            'role' => $invitation->role,
        ]);
    }
}
