const enableYandexMap = () => {
    const maps = document.querySelectorAll('.company__map')

    maps.forEach(map => {
        map.addEventListener('click', () => {
            map.classList.add('company__map--checked');
        }, { once: true })
    })
}

export default enableYandexMap;
