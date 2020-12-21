const watchVideo = () => {
    const wrappers = document.querySelectorAll('.videos__iframe-wrapper');
    const mainIframe = document.querySelector('#mainIframe');
    const close = document.querySelector('#videoClose');
    const player = document.querySelector('.videos__player');
    const body = document.querySelector('body');


    if(wrappers && mainIframe && close && player && body) {
        wrappers.forEach(video => {
            video.addEventListener('click', openFunc(player, mainIframe, body,video))
        })

        close.addEventListener('click', closeFunc(player, mainIframe, body));
        player.addEventListener('click', closeFunc(player, mainIframe, body));
    }
}

export default watchVideo;

const closeFunc = (player, mainIframe, body) => () => {
    player.classList.add('videos__player--disable');
    mainIframe.src = '';
    body.style.overflow = '';
}

const openFunc = (player, mainIframe, body, video) => () => {
    player.classList.toggle('videos__player--disable');
    mainIframe.src = `https://www.youtube.com/embed/${video.dataset.ytid}?rel=0&showinfo=0&autoplay=1`;
    body.style.overflow = 'hidden';
}
