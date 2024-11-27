<?php
namespace App\Http\Controllers;
use App\Models\Vendor;
use Illuminate\Http\Request;
class VendorController extends controller {
public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'service' => 'required|string|max:255',
        'contact' => 'required|string',
        'price' => 'required|numeric',
    ]);

    Vendor::create($request->all());

    return redirect()->route('vendors.index')->with('success', 'Vendor added successfully!');
}

public function index()
{
    $vendors = Vendor::all(); // You can add filters for service type or price
    return inertia('Vendors/Index', compact('vendors'));
}
}