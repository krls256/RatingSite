<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table)
        {
            $table->increments('review_id')->unsigned();


            $table->integer('review_place_in_top_10')->nullable()->default(null);

            $table->boolean('is_published')->default(1);
            $table->date('review_date');
            $table->string('review_link', 512);
            $table->integer('review_mark');
            $table->string('reviewer_name');
            $table->integer('source_id');
            $table->text('review_text')->nullable();

            $table->integer('company_id')->unsigned();
            $table->foreign('company_id')->references('company_id')
                ->on('companies');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
}
