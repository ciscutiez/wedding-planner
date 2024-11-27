<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    // Specify the table columns that can be mass-assigned
    protected $fillable = [
        'user_id',
        'title',
        'date',
        'status',
    ];

    /**
     * Define the relationship to the user.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
