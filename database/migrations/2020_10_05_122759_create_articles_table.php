<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('article_id')->unsigned();
            $table->timestamps();

            $table->string('article_title', 256);
            $table->string('article_slug', 256);
            $table->string('article_main_image');
            $table->text('article_description');

            $table->boolean('is_published')->default(1);

            $table->mediumText('article_content');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}
