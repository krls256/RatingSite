<div class="splitter__main">
    <section class="videos">
        <h1 class="h h--page text-black page__header">Полезное видео о возможностях в ремонте квартиры</h1>
        <div class="page__nav">Рейтинг компаний > <span class="c-orange-light">Видео</span></div>
        <ul class="videos__wrapper">
            @foreach($videos as $video)
                <li class="videos__item">
                    <h3 class="videos__name">{{$video->video_title}}</h3>
                    <div class="videos__iframe-wrapper">
                        <div class="videos__iframe-click"></div>
                        <iframe width="560" height="315" src="{{$video->video_link}}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <p class="videos__description">
                        {{$video->video_description}}
                    </p>
                </li>
            @endforeach
        </ul>
        {{$videos->links()}}
    </section>
</div>
