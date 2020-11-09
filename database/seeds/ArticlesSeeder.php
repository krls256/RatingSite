<?php

use Illuminate\Database\Seeder;


class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = 20;
        factory('App\Models\Articles', $count)->create();
    }
}
