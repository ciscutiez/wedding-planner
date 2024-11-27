<?php 


namespace App\Http\Controllers;





class CountdownController extends Controller
{
    public function getTargetDate()
    {
        // Example: Get the event date from your database, configuration, or hardcoded
        $targetDate = '2024-12-31T00:00:00Z'; // Replace with dynamic value if needed

        return response()->json(['targetDate' => $targetDate]);
    }
}
