<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('images', function (Blueprint $table)
        {
            $table->increments('image_id')
                ->unsigned();

            $table->string('image_link');

            $table->integer('review_id')
                ->unsigned()
                ->index();

            $table->boolean('is_published')
                ->default(true);
            $table->boolean('is_on_company_page')
                ->default(false);

            $table->foreign('review_id')
                ->references('review_id')
                ->on('reviews')
                ->cascadeOnDelete();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
    }
}
