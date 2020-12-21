<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\Articles;
use Faker\Generator as Faker;

$factory->define(Articles::class, function (Faker $faker) {
    return [
        'article_title' => $faker->sentence(),
        'article_slug' => $faker->slug(),
        'article_main_image' => 'text-image.jpg',
        'article_description' => $faker->realText(50),
        'article_content' => $faker->realText(500),
    ];
});

