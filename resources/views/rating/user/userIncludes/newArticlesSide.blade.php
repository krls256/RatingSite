<aside class="new-articles-side pt-4">
    <h3 class="h h--side mb-3">Новые статьи</h3>
    @foreach($articles as $article)
        <div class="new-articles-side__item p-3">
            <img src="{{ asset('img/text-image.jpg') }}"
                 alt="Картинка статьи 1"
                 class="new-articles-side__img mb-4">
            <h4 class="new-articles-side__title mb-2">{{$article->article_title}}</h4>
            <p class="new-articles-side__description mb-2">{{$article->article_description}}</p>
            <a href="{{ route('rating.user.articles.show', $article->article_slug) }}" class="new-articles-side__link">Читать статью ...</a>
        </div>
    @endforeach
</aside>
