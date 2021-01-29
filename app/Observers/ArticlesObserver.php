<?php

namespace App\Observers;

use App\Models\Articles;
use App\Services\MarkdownService\CreateFolderWithImagesService;
use GrahamCampbell\Markdown\Facades\Markdown;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ArticlesObserver
{
    private $storeService;

    public function __construct(CreateFolderWithImagesService $service)
    {
        $this->storeService = $service;
    }

    /**
     * Handle the articles "created" event.
     *
     * @param \App\Models\Articles $articles
     * @return void
     */
    public function creating(Articles $articles)
    {
        $articles->article_folder_suffix = Str::random(16);
        $articles->article_slug = Str::slug($articles->article_title);


        $putResult = $this->storeService->index($articles);


        $articles->article_main_image = $putResult['main'];

        foreach ($putResult['other'] as $k => $v)
        {
            $articles->article_content = str_replace($k, $v, $articles->article_content);
        }
        $articles->article_html = Markdown::convertToHtml($articles->article_content);
    }

    public function created(Articles $articles)
    {
    }


    public function updating(Articles $articles)
    {
        $articles->article_html = Markdown::convertToHtml($articles->article_content);
        $articles->article_slug = Str::slug($articles->article_title);
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
