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
            'header_key' => 'main',
            'header_value' => 'Независимый рейтинг строительных компаний',
            'header_description' => 'Заголовок, который появляется на всех страницах в начале'
        ],
        [
            'header_key' => 'rating',
            'header_value' => 'Рейтинг компаний по ремонте квартир в Москве. Отзывы реальных клиентов. Сравнение цен на услуги ремонта и дизайна интерьера квартир в строительных компаниях. Читайте отзывы и комментарии.',
            'header_description' => 'Заголовок перед топом компаний'
        ],
        [
            'header_key' => 'about',
            'header_value' => 'О проекте',
            'header_description' => 'Заголовок страницы `О проекте`'
        ],
        [
            'header_key' => 'article',
            'header_value' => 'Выберите любую статью для прочтения',
            'header_description' => 'Заголовок страницы `Статьи`'
        ],
        [
            'header_key' => 'video',
            'header_value' => 'Полезное видео о возможностях в ремонте квартиры',
            'header_description' => 'Заголовок страницы `Видел`'
        ],
        [
            'header_key' => 'reviews',
            'header_value' => 'Последние отзывы о компании (data)',
            'header_description' => 'Заголовок перед спискам отзывам'
        ],
        [
            'header_key' => 'side',
            'header_value' => 'Новые статьи',
            'header_description' => 'Загаловок перед sidebar'
        ]
    ];
}
