<aside class="videos__player {{request()->input('ytid') ? '' : 'videos__player--disable'}}">
    <div class="videos__player-wrapper">
        <div class="close videos__close" id="videoClose"></div>
        <iframe width="840" height="473" id="mainIframe"
                {{ request()->input('ytid') ? 'src=https://www.youtube.com/embed/'.request()->input('ytid').'?rel=0&showinfo=0&autoplay=1' : '' }}
                frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>

    </div>
</aside>
