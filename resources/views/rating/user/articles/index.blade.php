@extends('layouts.user')

@section('content')
    @include('rating.user.userIncludes.aboutSite')
    @include('rating.user.userIncludes.searchBar')
    <article class="articles pt-4 ph-4">
        <h1 class="h h--page text-black page__header">Выберите любую статью для прочтения</h1>
        <ul class="articles__list">
            @foreach($articles as $article)
                <li class="articles__list-item">
                    <img src="{{$article->LinkWithDir}}"
                         alt="Картинка статьи {{$article->article_title}}"
                         class="articles__img">
                    <div class="articles__content">
                        <h3 class="articles__header">{{$article->article_title}}</h3>
                        <p class="articles__description">{{$article->article_description}}</p>
                        <a href="{{ route('rating.user.articles.show', $article->article_slug) }}"
                           class="articles__link">Читать статью...</a>
                    </div>
                </li>
            @endforeach
        </ul>
        {{$articles->links()}}
    </article>
@endsection
