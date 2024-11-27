<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'contact_info',
        'service_type',
        'event_id',
    ];

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
