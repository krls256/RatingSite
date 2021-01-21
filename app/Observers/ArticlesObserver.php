<?php

namespace App\Observers;

use App\Models\Articles;
use GrahamCampbell\Markdown\Facades\Markdown;
use Illuminate\Support\Str;

class ArticlesObserver
{
    /**
     * Handle the articles "created" event.
     *
     * @param \App\Models\Articles $articles
     * @return void
     */
    public function creating(Articles $articles)
    {
        $articles->article_html = Markdown::convertToHtml($articles->article_content);
        $articles->article_slug = Str::slug($articles->article_title);
    }

    public function created(Articles $articles)
    {
        //
    }

    /**
     * Handle the articles "updated" event.
     *
     * @param \App\Models\Articles $articles
     * @return void
     */
    public function updated(Articles $articles)
    {
        //
    }

    /**
     * Handle the articles "deleted" event.
     *
     * @param \App\Models\Articles $articles
     * @return void
     */
    public function deleted(Articles $articles)
    {
        //
    }

    /**
     * Handle the articles "restored" event.
     *
     * @param \App\Models\Articles $articles
     * @return void
     */
    public function restored(Articles $articles)
    {
        //
    }

    /**
     * Handle the articles "force deleted" event.
     *
     * @param \App\Models\Articles $articles
     * @return void
     */
    public function forceDeleted(Articles $articles)
    {
        //
    }
}
