 <div class="splitter__main">
    <section class="videos">
        <h1 class="h h--page text-black page__header">{{$headers['videos']}}</h1>
        <div class="page__nav">Рейтинг компаний > <span class="c-orange-light">Видео</span></div>
        <ul class="videos__wrapper">
            @foreach($videos as $video)
                <li class="videos__item">
                    <h3 class="videos__name">{{$video->video_title}}</h3>
                    <div class="videos__iframe-wrapper" data-ytid="{{$video->video_ytid}}">
                        <picture>
                            <img src="https://i.ytimg.com/vi/{{$video->video_ytid}}/maxresdefault.jpg"
                                 alt="Видео {{$video->video_title}}"
                                 title="Видео {{$video->video_title}}"
                                 class="videos__media">
                        </picture>
                        <button class="videos__button" aria-label="Посмотреть видео">
                            <svg class="videos__button-svg" width="68" height="48" viewBox="0 0 68 48">
                                <path class="videos__button-shape" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path>
                                <path class="videos__button-icon" d="M 45,24 27,14 27,34"></path>
                            </svg>
                        </button>
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
