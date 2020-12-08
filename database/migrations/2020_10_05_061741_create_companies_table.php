<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {

            // SQL variables
            $table->increments('company_id')->unsigned();

            $table->boolean('is_published')->default(true);

            //Main variables
            $table->string('company_name');
            $table->string('company_slug');

            // statistic variables
            $table->integer('company_positive')->default(0);
            $table->integer('company_negative')->default(0);
            $table->integer('company_mark_difference')->default(0);
            $table->integer('company_position')->unsigned()->nullable()->default(null);

            $table->float('company_average_mark')->default(0);
            $table->float('company_average_mark_yandex')->default(0);
            $table->float('company_average_mark_google')->default(0);
            $table->float('company_average_mark_otzovick')->default(0);
            $table->float('company_average_mark_yell')->default(0);
            $table->float('company_average_mark_flamp')->default(0);

            $table->integer('company_quantity_review')->default(0);
            $table->integer('company_quantity_review_yandex')->default(0);
            $table->integer('company_quantity_review_google')->default(0);
            $table->integer('company_quantity_review_otzovick')->default(0);
            $table->integer('company_quantity_review_yell')->default(0);
            $table->integer('company_quantity_review_flamp')->default(0);


            //important data
            $table->string('company_logo_link')->nullable();
            $table->string('company_yandex_map_link')->nullable();
            $table->text('company_description')->nullable();
            $table->string('company_description_styles')->nullable();

            // less important data
            $table->string('company_inn')->nullable(); // Taxpayer identification number
            $table->string('company_phone')->nullable();
            $table->string('company_site')->nullable();
            $table->string('company_email')->nullable();
            $table->string('company_city')->nullable();
            $table->string('company_address')->nullable();
            $table->date('company_creating_date')->nullable();


            // parse ids
            $table->string('company_yandex_id', 512)->nullable();
            $table->string('company_google_id', 512)->nullable();
            $table->string('company_otzovick_id', 512)->nullable();
            $table->string('company_yell_id', 512)->nullable();
            $table->string('company_flamp_id', 512)->nullable();

            $table->string('company_yandex_link', 512)->nullable();
            $table->string('company_google_link', 1024)->nullable();
            $table->string('company_otzovick_link', 512)->nullable();
            $table->string('company_yell_link', 512)->nullable();
            $table->string('company_flamp_link', 512)->nullable();

            // social
            $table->string('company_fb')->nullable();
            $table->string('company_ok')->nullable();
            $table->string('company_vk')->nullable();
            $table->string('company_whatsapp')->nullable();
            $table->string('company_viber')->nullable();
            $table->string('company_telegram')->nullable();
            $table->string('company_twitter')->nullable();
            $table->string('company_instagram')->nullable();

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
        Schema::dropIfExists('companies');
    }
}
