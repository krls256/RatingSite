@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    @include('rating.user.userIncludes.searchBar')
    <article class="search pt-4 ph-4">
        <h1 class="h h--page text-black page__header">Ответ на поисковый запрос "{{$query}}"</h1>
        <ul class="search__list">
            @foreach($response as $item)
                <li class="search__item">
                    <a href="{{$item->link}}" class="search__link">{{$item->title}}</a>
                </li>
            @endforeach
            @if($response->count() === 0)
                <li class="search__item--nores">
                    Ничего не найдено <a href="{{ route('rating.user.main') }}" class="search__link--nores">Вернутся на главную</a>
                </li>
            @endif
        </ul>
    </article>
@endsection

@section('meta')
    <meta name="robots" content="noindex" />
@endsection
