<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\URL;

class Web extends Controller
{
    protected array $photoCollection = [
        [
            'path' => 'https://p4.wallpaperbetter.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg',
            'name' => 'Nature'
        ],
        [
            'path' => 'https://p4.wallpaperbetter.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg',
            'name' => 'Himalayas mountains'
        ],
        [
            'path' => 'https://p4.wallpaperbetter.com/wallpaper/633/46/557/3d-space-wallpaper-preview.jpg',
            'name' => 'Space'
        ],
        [
            'path' => 'https://p4.wallpaperbetter.com/wallpaper/87/851/622/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg',
            'name' => 'Laptop'
        ],
        [
            'path' => 'https://p4.wallpaperbetter.com/wallpaper/87/851/622/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg',
            'name' => 'Laptop'
        ],
        [
            'path' => 'https://p4.wallpaperbetter.com/wallpaper/87/851/622/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg',
            'name' => 'Laptop'
        ],
        [
            'path' => 'https://p4.wallpaperbetter.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg',
            'name' => 'Nature'
        ],
        [
            'path' => 'https://p4.wallpaperbetter.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-preview.jpg',
            'name' => 'Nature'
        ],
    ];

    public function unsplash($name = '')
    {
        $photoCollection = $this->photoCollection;

        if ($name) {

            $photoCollection = [];

            foreach ($this->photoCollection as $photo) {
                if (str_contains(strtolower($photo['name']), strtolower($name))) {

                    $photoCollection[] = $photo;
                }
            }
        }

        return inertia('Unsplash', [
            'photoCollection' => $photoCollection
        ]);
    }
}
