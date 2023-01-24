<?php

namespace App\Http\Controllers;

use App\Models\Photo;
use Illuminate\Support\Facades\URL;

class Web extends Controller
{
    public function unsplash($name = '')
    {
        $photoCollection = Photo::all();

        if ($name) {
            $photoCollection = Photo::where('name', 'like', "%{$name}%")->get();
        }

        return inertia('Unsplash', [
            'photoCollection' => $photoCollection
        ]);
    }
}
