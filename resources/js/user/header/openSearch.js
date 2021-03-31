const openSearch = () => {
    const search = document.querySelector('#search-open');
    const aside = document.querySelector('.search-line');

    search.addEventListener('click', () => {
        aside.classList.toggle('search-line--active')
    })
}

export default openSearch;
