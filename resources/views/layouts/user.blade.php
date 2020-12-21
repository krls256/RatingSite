<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">


    <title>{{$seo->title}}</title>
    <meta name="description" content="{{$seo->title}}"/>
    @if($seo->keywords) <meta name="keywords" content="{{$seo->keywords}}" /> @endif

    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('img/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('img/site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('img/safari-pinned-tab.svg') }}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
    <header class="header">
        <div class="header__wrapper ph-3">
            <a href="{{route('rating.user.main')}}" class="header__link">
                <img src="{{ asset("img/logo.svg") }}" alt="Главный логотип сайта" class="header__logo mr-1">
                <p class="header__name">Ремонт Москва</p>
            </a>

            <nav class="header__nav header__nav--disabled header__nav--initial">
                <ul class="header__list">
                    <li class="header__list-item">
                        <a href="{{ route('rating.user.main') }}"
                           @if(\Request::route()->getName() === 'rating.user.main') class="header__list-link header__list-link--selected" @else class="header__list-link" @endif>Рейтинг компаний</a>
                    </li>
                    <li class="header__list-item">
                        <a href="{{ route('rating.user.about') }}"
                           @if(\Request::route()->getName() === 'rating.user.about') class="header__list-link header__list-link--selected" @else class="header__list-link" @endif>О проекте</a>
                    </li>
                    <li class="header__list-item">
                        <a href="{{ route('rating.user.articles.index') }}"
                           @if(\Request::route()->getName() === 'rating.user.articles.index') class="header__list-link header__list-link--selected" @else class="header__list-link" @endif>Статьи</a>
                    </li>
                    <li class="header__list-item">
                        <a href="{{ route('rating.user.videos') }}"
                           @if(\Request::route()->getName() === 'rating.user.videos') class="header__list-link header__list-link--selected" @else class="header__list-link" @endif>Видео</a>
                    </li>
                </ul>
            </nav>
            <div class="header__overlay header__overlay--disable"></div>
            <button class="burger">
                <span class="burger__line burger__line--1"></span>
                <span class="burger__line burger__line--2"></span>
                <span class="burger__line burger__line--3"></span>
            </button>
        </div>

    </header>
    <main class="main">
        <div class="container">
            @yield('content')
        </div>
    </main>
    <footer class="footer">
        <h4 class="c-white text-norm text-center pt-4">Все права защищены © !!!rating-remont-kvartir.ru!!! 2016 – 2019</h4>

        <h5 class="c-white text-norm text-center pt-3">Полезные статьи</h5>
    </footer>
    <script src="{{ asset('/js/script.js') }}"></script>
    <script src="{{ asset('/js/search.js') }}"></script>
</body>
</html>
