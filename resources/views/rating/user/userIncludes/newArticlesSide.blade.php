<aside class="new-articles-side">
    <h2 class="h h--side mb-3">{{$headers['side']}}</h2>
    @foreach($articles as $article)
        @php $cycle = route('rating.user.articles.show', $article->article_slug) === request()->url() @endphp
        <div class="new-articles-side__item p-3">
            @if(!$cycle) <a href="{{ route('rating.user.articles.show', $article->article_slug) }}" class="new-articles-side__link">@else <span class="new-articles-side__link"> @endif
                <img src="{{$article->article_main_image}}"
                     alt="Картинка статьи {{$article->article_title}}"
                     title="Картинка статьи {{$article->article_title}}"
                     class="new-articles-side__img mb-4">
                <h4 class="new-articles-side__title mb-2">{{$article->article_title}}</h4>
                <p class="new-articles-side__description mb-2">{{$article->article_description}}</p>
                <small class="new-articles-side__read">Читать статью ...</small>
                @if(!$cycle)</a> @else </span> @endif
        </div>
    @endforeach
</aside>
