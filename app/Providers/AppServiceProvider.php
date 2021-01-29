<?php

namespace App\Providers;

use App\Models\Articles;
use App\Models\Companies;
use App\Models\Videos;
use App\Observers\ArticlesObserver;
use App\Observers\CompaniesObserver;
use App\Observers\VideosObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        Videos::observe(VideosObserver::class);
        Articles::observe(ArticlesObserver::class);
        Companies::observe(CompaniesObserver::class);
    }
}
