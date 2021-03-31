const scrollToReviews = () => {
    const reviewsBlock = document.querySelector('.reviews');
    if(reviewsBlock) {
        const {reviews = null} = reviewsBlock.dataset;
        if(reviews) {
            let {top} = reviewsBlock.getBoundingClientRect();
            const offset = 200;

            top -= offset;
            window.scrollTo({
                top,
                behavior: "smooth"
            });
        }
    }
}

export default scrollToReviews;
