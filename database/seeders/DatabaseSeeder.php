<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use App\Models\Photo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory([ 
            'folder' => fake()->bothify('?#?#?#?#?#?#?#')
        ])->count(4)->has(
            Photo::factory()->count(10)->state(function (array $attributes, User $user) {

                // Storage::makeDirectory("public/photo/{$user->folder}");

                $imageUrl = fake()->imageUrl();
                $imageName = [];
                parse_str(parse_url($imageUrl, PHP_URL_QUERY), $imageName);

                return [
                    'name' => $imageName['text'],
                    'path' => $imageUrl
                ];
            })
        )->create();
    }
}
