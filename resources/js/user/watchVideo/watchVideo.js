const watchVideo = () => {
    const wrappers = document.querySelectorAll('.videos__iframe-wrapper');
    const mainIframe = document.querySelector('#mainIframe');
    const close = document.querySelector('#videoClose');
    const player = document.querySelector('.videos__player');
    const body = document.querySelector('body');


    if(wrappers && mainIframe && close && player && body) {
        wrappers.forEach(wr => {
            const video = wr.querySelector('.videos__iframe-click');

            video.addEventListener('click', openFunc(player, mainIframe, body, wr))
        })

        close.addEventListener('click', closeFunc(player, mainIframe, body));
        player.addEventListener('click', closeFunc(player, mainIframe, body));
    }
}

export default watchVideo;

const closeFunc = (player, mainIframe, body) => () => {
    player.classList.add('videos__player--disable');
    mainIframe.src = mainIframe.src;
    body.style.overflow = '';
}

const openFunc = (player, mainIframe, body, wr) => () => {
    player.classList.toggle('videos__player--disable');
    mainIframe.src = wr.querySelector('iframe').src;
    body.style.overflow = 'hidden';
}
