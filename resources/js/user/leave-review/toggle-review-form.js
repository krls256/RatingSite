const toggleReviewForm = () => {
    const button = document.querySelector('#leave-review');
    const block = document.querySelector('.leave-review');
    const close = document.querySelector('.leave-review__close');
    const body = document.querySelector('body');

    button.addEventListener('click', toggleForm(block, body))
    close.addEventListener('click', toggleForm(block, body))
}


const toggleForm = (block, body) => () => {
    block.classList.toggle('leave-review--disable')
    if(body.style.overflow === 'hidden') {
        body.style.overflow = '';
    } else {
        body.style.overflow = 'hidden'
    }
}

export default toggleReviewForm;
