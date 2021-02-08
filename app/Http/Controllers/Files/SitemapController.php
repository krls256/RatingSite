<?php

namespace App\Http\Controllers\Files;

use App\Http\Controllers\Controller;
use App\Repositories\SEO\SitemapCompaniesRepository;
use Illuminate\Http\Request;

class SitemapController extends Controller
{
    public function index(SitemapCompaniesRepository $companiesRepository) {
        $companies = $companiesRepository->getAllCompanies();

        return response()->view('seo.sitemap.index', [
                'companies' => $companies
            ])->header('Content-Type', 'text/xml');

    }
}
