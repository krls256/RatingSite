<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Videos;
use Faker\Generator as Faker;

$factory->define(Videos::class, function (Faker $faker) {
    $title = $faker->sentence();
    $slug = Str::slug($title);
    return [
        'video_ytid' => 'BHACKCNDMW8',
        'video_title' => $title,
        'video_slug' => $slug,
        'video_description' => $faker->realText(200)
    ];
});
