<?php

use Illuminate\Database\Seeder;
use App\Repositories\Headers\SeederHeadersRepository;

class HeadersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(SeederHeadersRepository $headersRepository)
    {
        $headersRepository->shoreHeadersBase($this->startData);
    }

    private $startData = [
        [
            'header_key' => 'main.home',
            'header_value' => 'Независимый рейтинг строительных компаний',
            'header_description' => 'Главный заголовок, который появляется на главной странице'
        ],
        [
            'header_key' => 'main.about',
            'header_value' => 'Независимый рейтинг строительных компаний',
            'header_description' => 'Главный заголовок, который появляется на странице описания проекта'
        ],
        [
            'header_key' => 'main.articles',
            'header_value' => 'Независимый рейтинг строительных компаний',
            'header_description' => 'Главный заголовок, который появляется на странице списка статей'
        ],
        [
            'header_key' => 'main.article',
            'header_value' => 'Независимый рейтинг строительных компаний',
            'header_description' => 'Главный заголовок, который появляется на странице открытой статьи'
        ],
        [
            'header_key' => 'main.videos',
            'header_value' => 'Независимый рейтинг строительных компаний',
            'header_description' => 'Главный заголовок, который появляется на странице видео'
        ],
        [
            'header_key' => 'main.companies',
            'header_value' => 'Независимый рейтинг строительных компаний',
            'header_description' => 'Главный заголовок, который появляется на странице компаний'
        ],
        [
            'header_key' => 'main.search',
            'header_value' => 'Независимый рейтинг строительных компаний',
            'header_description' => 'Главный заголовок, который появляется на странице поисковой выдачи'
        ],
        [
            'header_key' => 'main.review',
            'header_value' => 'Независимый рейтинг строительных компаний',
            'header_description' => 'Заголовок, который появляется на всех страницах в начале'
        ],
        [
            'header_key' => 'rating',
            'header_value' => 'Рейтинг компаний по ремонте квартир в Москве. Отзывы реальных клиентов.',
            'header_description' => 'Заголовок перед топом компаний'
        ],
        [
            'header_key' => 'about',
            'header_value' => 'О проекте',
            'header_description' => 'Заголовок страницы `О проекте`'
        ],
        [
            'header_key' => 'articles',
            'header_value' => 'Выберите любую статью для прочтения',
            'header_description' => 'Заголовок страницы `Статьи`'
        ],
        [
            'header_key' => 'videos',
            'header_value' => 'Полезное видео о возможностях в ремонте квартиры',
            'header_description' => 'Заголовок страницы `Видел`'
        ],
        [
            'header_key' => 'reviews',
            'header_value' => 'Последние отзывы о компании (data)',
            'header_description' => 'Заголовок перед спискам отзывам'
        ],
        [
            'header_key' => 'reviews.positive',
            'header_value' => 'Позитивные отзывы о компании (data)',
            'header_description' => 'Заголовок перед спискам отзывам'
        ],
        [
            'header_key' => 'reviews.negative',
            'header_value' => 'Негативные отзывы о компании (data)',
            'header_description' => 'Заголовок перед спискам отзывам'
        ],
        [
            'header_key' => 'side',
            'header_value' => 'Новые статьи',
            'header_description' => 'Загаловок перед sidebar'
        ],
        [
            'header_key' => 'about-company',
            'header_value' => 'Информация о компании &#171;(data)&#187;',
            'header_description' => 'Заголовок, описывающий компанию'
        ],
    ];
}
