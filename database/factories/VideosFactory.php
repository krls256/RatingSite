<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Videos;
use Faker\Generator as Faker;

$factory->define(Videos::class, function (Faker $faker) {
    return [
        'video_link' => $faker->url,
        'video_title' => $faker->sentence(),
        'video_description' => $faker->realText(200)
    ];
});
