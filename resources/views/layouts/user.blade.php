<!doctype html>
<html lang="ru">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ asset('css/style.css') }}">


    <title>{{$seo->title ?? ''}}</title>
    <meta name="description" content="{{$seo->description ?? ''}}" />
    @if($seo->keywords ?? false)
        <meta name="keywords" content="{{$seo->keywords ?? ''}}" /> @endif

    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('img/apple-touch-icon.png')}}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('img/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('img/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('img/site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('img/safari-pinned-tab.svg') }}" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <meta name="g-recaptcha" content="{{env('RECAPTCHA_PUBLIC_KEY')}}">

    @section('meta') @show
</head>
<body>
<header class="header">
    <div class="header__wrapper ph-3">
        <a href="{{route('rating.user.main')}}" class="header__link">
            <img src="{{ asset("img/logo.svg") }}"
                 alt="Главный логотип сайта top-remontov.ru"
                 title="Главный логотип сайта top-remontov.ru"
                 class="header__logo mr-1">
            <p class="header__name">Ремонт Москва</p>
        </a>
        <nav class="header__nav header__nav--disabled header__nav--initial">
            <ul class="header__list">
                <li class="header__list-item">
                    <a href="{{ route('rating.user.main') }}"
                       @if((\Request::route() ? \Request::route()->getName() : '') === 'rating.user.main') class="header__list-link header__list-link--selected"
                       @else class="header__list-link" @endif>Рейтинг компаний</a>
                </li>
                <li class="header__list-item">
                    <a href="{{ route('rating.user.about') }}"
                       @if((\Request::route() ? \Request::route()->getName() : '') === 'rating.user.about') class="header__list-link header__list-link--selected"
                       @else class="header__list-link" @endif>О проекте</a>
                </li>
                <li class="header__list-item">
                    <a href="{{ route('rating.user.articles.index') }}"
                       @if((\Request::route() ? \Request::route()->getName() : '') === 'rating.user.articles.index') class="header__list-link header__list-link--selected"
                       @else class="header__list-link" @endif>Статьи</a>
                </li>
                <li class="header__list-item">
                    <a href="{{ route('rating.user.videos') }}"
                       @if((\Request::route() ? \Request::route()->getName() : '') === 'rating.user.videos') class="header__list-link header__list-link--selected"
                       @else class="header__list-link" @endif>Видео</a>
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
    <div class="container">
        <div class="footer__content">
            <h2 class="h h--main c-white pt-6">Новые видео</h2>
            <ul class="footer__card-list">
                @foreach($footer_videos as $footer_video)
                <li class="footer__card">
                    <a href="{{route('rating.user.videos', ['ytid' => $footer_video->video_ytid])}}" class="footer__card-link">
                        <h3 class="footer__card-label">{{$footer_video->video_title}}</h3>
                        <picture class="footer__card-pic">
                            <img class="footer__card-img"
                                 src="https://i.ytimg.com/vi/{{$footer_video->video_ytid}}/maxresdefault.jpg"
                                 alt="{{$footer_video->video_title}}"
                                 title="{{$footer_video->video_title}}">
                        </picture>
                    </a>
                </li>
                @endforeach
            </ul>
        </div>

        <hr class="footer__hr">

        <div class="footer__content">
            <nav class="footer__nav">
                <ul class="footer__nav-list">
                    <li class="footer__nav-item">
                        <a href="{{ route('rating.user.main') }}"
                           @if((\Request::route() ? \Request::route()->getName() : '') === 'rating.user.main') class="footer__nav-link footer__nav-link--selected"
                           @else class="footer__nav-link" @endif>Рейтинг компаний</a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="{{ route('rating.user.about') }}"
                           @if((\Request::route() ? \Request::route()->getName() : '') === 'rating.user.about') class="footer__nav-link footer__nav-link--selected"
                           @else class="footer__nav-link" @endif>О проекте</a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="{{ route('rating.user.articles.index') }}"
                           @if((\Request::route() ? \Request::route()->getName() : '') === 'rating.user.articles.index') class="footer__nav-link footer__nav-link--selected"
                           @else class="footer__nav-link" @endif>Статьи</a>
                    </li>
                    <li class="footer__nav-item">
                        <a href="{{ route('rating.user.videos') }}"
                           @if((\Request::route() ? \Request::route()->getName() : '') === 'rating.user.videos') class="footer__nav-link footer__nav-link--selected"
                           @else class="footer__nav-link" @endif>Видео</a>
                    </li>
                </ul>
            </nav>
            <h4 class="c-white text-norm text-center footer__copywriting">© 2021 top-remontov.ru </h4>
        </div>
    </div>
</footer>
<script src="{{ asset('/js/script.js') }}"></script>
<script src="{{ asset('/js/search.js') }}"></script>
<script src="https://www.google.com/recaptcha/api.js?render={{env('RECAPTCHA_PUBLIC_KEY')}}"></script>
<script>
    function onSubmit(token) {
        var form = document.getElementById("leaveReviewFormCore");
        form.submit();
    }
</script>
</body>
</html>
