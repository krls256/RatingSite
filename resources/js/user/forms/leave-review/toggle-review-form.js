const toggleReviewForm = () => {
    const button = document.querySelector('#leave-review');
    const form = document.querySelector('.leave-review');
    const close = document.querySelector('#leaveClose');
    const body = document.querySelector('body');

    if(button && form && close && body) {
        if(!form.classList.contains('leave-review--disable')) {
            body.style.overflow = 'hidden'
        }

        button.addEventListener('click', toggleForm(form, body))
        close.addEventListener('click', toggleForm(form, body))
    }
}



const toggleForm = (block, body) => () => {
    block.classList.toggle('leave-review--disable');
     if (body.style.overflow === 'hidden') {
         body.style.overflow = '';
     } else {
         body.style.overflow = 'hidden'
     }
}

export default toggleReviewForm;
