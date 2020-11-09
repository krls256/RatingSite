<?php


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{


    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(CompaniesSeeder::class);
        $this->call(ReviewsSeeder::class);
        $this->call(ImagesSeeder::class);
        $this->call(RatingAverageValuesSeeder::class);
        $this->call(ArticlesSeeder::class);
        $this->call(VideosSeeder::class);
    }
}
