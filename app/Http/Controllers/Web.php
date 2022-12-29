<?php

namespace App\Http\Controllers;

class Web extends Controller
{
    public function Home()
    {
        return inertia('Home');
    }
}
