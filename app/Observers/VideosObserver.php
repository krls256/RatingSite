<?php

namespace App\Observers;

use App\Models\Videos;
use Illuminate\Support\Str;

class VideosObserver
{
    /**
     * Handle the videos "created" event.
     *
     * @param  \App\Videos  $videos
     * @return void
     */
    public function creating(Videos $videos)
    {
        $videos->video_slug = Str::slug($videos->video_title);
    }

    public function created(Videos $videos)
    {
        //
    }

    /**
     * Handle the videos "updated" event.
     *
     * @param  \App\Videos  $videos
     * @return void
     */


    /**
     * Handle the videos "deleted" event.
     *
     * @param  \App\Videos  $videos
     * @return void
     */
    public function deleted(Videos $videos)
    {
        //
    }

    /**
     * Handle the videos "restored" event.
     *
     * @param  \App\Videos  $videos
     * @return void
     */
    public function restored(Videos $videos)
    {
        //
    }

    /**
     * Handle the videos "force deleted" event.
     *
     * @param  \App\Videos  $videos
     * @return void
     */
    public function forceDeleted(Videos $videos)
    {
        //
    }
}
