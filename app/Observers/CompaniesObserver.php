<?php

namespace App\Observers;

use App\Models\Companies;
use GrahamCampbell\Markdown\Facades\Markdown;

class CompaniesObserver
{
    public function creating(Companies $companies)
    {
        $this->convertMarkDown($companies);
    }

    /**
     * Handle the companies "created" event.
     *
     * @param \App\Models\Companies $companies
     * @return void
     */
    public function created(Companies $companies)
    {
        //
    }

    public function updating(Companies $companies)
    {
        $this->convertMarkDown($companies);
    }


    /**
     * Handle the companies "updated" event.
     *
     * @param \App\Models\Companies $companies
     * @return void
     */
    public function updated(Companies $companies)
    {
        //
    }

    /**
     * Handle the companies "deleted" event.
     *
     * @param \App\Models\Companies $companies
     * @return void
     */
    public function deleted(Companies $companies)
    {
        //
    }

    /**
     * Handle the companies "restored" event.
     *
     * @param \App\Models\Companies $companies
     * @return void
     */
    public function restored(Companies $companies)
    {
        //
    }

    /**
     * Handle the companies "force deleted" event.
     *
     * @param \App\Models\Companies $companies
     * @return void
     */
    public function forceDeleted(Companies $companies)
    {
        //
    }

    private function convertMarkDown(Companies $companies)
    {
        $companies->company_description_html = Markdown::convertToHtml($companies->company_description);
    }
}
