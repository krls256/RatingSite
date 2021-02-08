<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>{{ route('rating.user.main') }}</loc>
        <lastmod>2021-02-04T14:54:16+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1</priority>
    </url>
    <url>
        <loc>{{ route('rating.user.about') }}</loc>
        <lastmod>2021-02-04T14:54:16+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1</priority>
    </url>
    <url>
        <loc>{{ route('rating.user.videos') }}</loc>
        <lastmod>2021-02-04T14:54:16+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1</priority>
    </url>
    <url>
        <loc>{{ route('rating.user.articles.index') }}</loc>
        <lastmod>2021-02-04T14:54:16+00:00</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1</priority>
    </url>
    @foreach ($companies as $company)
        <url>
            <loc>{{ route('rating.user.companies', $company->company_slug) }}</loc>
            <lastmod>{{ $company->updated_at->toAtomString() }}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
    @endforeach
</urlset>
