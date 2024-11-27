<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BudgetController extends Controller
{
    public function index()
    {
        $expenses = Budget::all();
        return Inertia::render('Budget/Index', ['expenses' => $expenses]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'category' => 'required|string|max:255',
            'amount' => 'required|numeric',
            'description' => 'nullable|string',
        ]);

        Budget::create($request->all());

        return redirect()->route('budget.index')->with('success', 'Expense added successfully.');
    }
    
}
