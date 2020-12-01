const toggleNav = () => {
    const close = document.querySelector('.burger');
    const list = document.querySelector('.header__nav')
    const overlay = document.querySelector('.header__overlay');

    close.addEventListener('click', toggle(close, list, overlay))
    overlay.addEventListener('click', () => {
        if(!overlay.classList.contains('header__overlay--disable')) {
            toggle(close, list, overlay)();
        }
    })

}

const toggle = (close, list, overlay) => () => {
    close.classList.toggle('burger--active');
    list.classList.toggle('header__nav--disabled')
    list.classList.toggle('header__nav--active')
    list.classList.remove('header__nav--initial')
    overlay.classList.toggle('header__overlay--disable');
}


export default toggleNav
