const printStars = () => {
    const stars = document.querySelectorAll('.stars')
    stars.forEach(star => {
        const width = (star.dataset.rate) * 20;
        const activeStars = star.querySelector('.stars__active')
        activeStars.style.width = `${width}%`;
        console.log(activeStars, width, star)
    })
}


export default printStars;
