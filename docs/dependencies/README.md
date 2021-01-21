# Список зависимостей внешних проекта

* [Зависимость для работы с Markdown](https://github.com/GrahamCampbell/Laravel-Markdown)
    * Установка: composer require graham-campbell/markdown:^13.1
    * Добавить в _config/app.php_ (aliases) - Фасад:  
    _'Markdown' => GrahamCampbell\Markdown\Facades\Markdown::class,_
    * Для настройки конфигурации необходимо написать код 
    _php artisan vendor:publish_, и опубликовать все зависимости, связанные с данным пакетом.
    Это создаст _config/markdown.php_ (файл настройки)
    * В вашем распоряжении фасад Markdown
    
