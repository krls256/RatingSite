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
    pushHistory();
    player.classList.add('videos__player--disable');
    mainIframe.src = '';
    body.style.overflow = '';
}

const openFunc = (player, mainIframe, body, video) => () => {
    const id = video.dataset.ytid ? video.dataset.ytid :  null;
    pushHistory(id);
    player.classList.toggle('videos__player--disable');
    mainIframe.src = `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`;
    body.style.overflow = 'hidden';
}

const pushHistory = (ytid = null) => {
    const attrStr = newAttributes(ytid)

    window.history.pushState(
        null,
        window.title,
        `${window.location.pathname}${attrStr}`
    );
}

const newAttributes = (ytid) => {
    const url = new URL(window.location);
    const attributes = Object.entries(Object.fromEntries(url.searchParams.entries()));
    let attrStr = '?';

    attributes.forEach((item) => {

        if(attrStr.slice(-1) !== '&' && attrStr.slice(-1) !== '?') {
            attrStr += '&'
        }
        if(item[0] !== 'ytid') {
            attrStr += `${item[0]}=${item[1]}`;
        }
    })
    if(ytid) {
        if(attrStr.slice(-1) !== '&' && attrStr.slice(-1) !== '?') {
            attrStr += '&'
        }
        attrStr += `ytid=${ytid}`
    }
    return attrStr === '?' ? '' : attrStr;
}
