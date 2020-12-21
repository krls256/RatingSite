<?php


use App\Repositories\SEO\SeederSEORepository;
use Illuminate\Database\Seeder;

class SEOSeeder extends Seeder
{
    private $repository;

    public function __construct(SeederSEORepository $repository)
    {
        $this->repository = $repository;
    }


    public function run()
    {
        $this->repository->storeSEOBase($this->startData);
    }

    private $startData = [
        [
            'title_index' => 'main',
            'title' => 'Ремонт Москва',
            'description' => 'Описание страници Ресонт Москва',
            'keywords' => 'ключевие слова'
        ], [
            'title_index' => 'about',
            'title' => 'о сайте Ремонт Москва',
            'description' => 'Описание сайта Ремонт Москва',
            'keywords' => 'ключевие слова'
        ], [
            'title_index' => 'articles',
            'title' => 'Статьи',
            'description' => 'Описание статей сайта Ремонт Москва',
            'keywords' => 'ключевие слова'
        ], [
            'title_index' => 'article',
            'title' => 'Статья',
            'description' => 'Описание статьи сайта Ремонт Москва',
            'keywords' => 'ключевие слова'
        ], [
            'title_index' => 'videos',
            'title' => 'Видео',
            'description' => 'Описание видео сайта Ремонт Москва',
            'keywords' => 'ключевие слова'
        ], [
            'title_index' => 'companies',
            'title' => 'Страница компании | (data)',
            'description' => 'Страница компании | (data)',
            'keywords' => 'ключевие слова'
        ], [
            'title_index' => 'search',
            'title' => 'Результат поиска',
            'description' => 'Результат поиска',
            'keywords' => 'ключевие слова'
        ], [
            'title_index' => 'thanks',
            'title' => 'Страница благодарности',
            'description' => 'Страница благодарности',
            'keywords' => 'ключевие слова'
        ], [
            'title_index' => 'review',
            'title' => 'Страница отзыва (data)',
            'description' => 'Страница отзыва',
            'keywords' => 'ключевие слова'
        ]
    ];
}
