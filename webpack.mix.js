const mix = require('laravel-mix');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .copyDirectory('resources/img', 'public/img')
    .copyDirectory('resources/fonts', 'public/fonts')
    .copyDirectory('resources/logo', 'public/logo')
    .react('resources/js/admin.js', 'public/js')
    .react('resources/js/Search.js', 'public/js/search.js')
    .js('resources/js/script.js', 'public/js')
    .sass('resources/sass/admin.scss', 'public/css')
    .sass('resources/sass/style.scss', 'public/css')
    .options({
        processCssUrls: false
    });
