<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review_answers', function (Blueprint $table) {
            $table->increments('review_answer_id');

            $table->string('reviewer_answer_name');
            $table->text('review_answer_text');
            $table->integer('review_id')->unsigned();
            $table->boolean('is_published')->default(false);

            $table->foreign('review_id')->references('review_id')
                ->on('reviews');

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
        Schema::dropIfExists('review_answers');
    }
}
