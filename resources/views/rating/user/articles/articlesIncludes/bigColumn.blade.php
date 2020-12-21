<div class="splitter__main">
    <article class="articles__card">
        <div class="articles__card-header">
            <h1 class="h h--page text-black page__header">{{$article->article_title}}</h1>
        </div>
        <div class="articles__card-body">
            <img src="{{ $article->LinkWithDir }}"
                 alt="Картинка статьи {{$article->article_title}}" class="articles__card-image">
            <p class="articles__card-content">{!! $article->article_content !!}</p>
        </div>
    </article>
</div>
