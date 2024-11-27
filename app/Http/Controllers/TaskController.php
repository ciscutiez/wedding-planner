<?php

namespace App\Http\Controllers;


use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
class TaskController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'completed' => 'required|boolean',
        ]);

        Task::create($request->all());

        return redirect()->route('tasks.index')->with('success', 'Task added successfully!');
    }

    public function index()
    {
        $tasks = Task::all();
        return inertia('Tasks/Index', compact('tasks'));
    }
}