const addReviewAnswerToggle = () => {
    const answerArr = document.querySelectorAll('[data-toggle="addReviewAnswer"]')
    const form = document.querySelector('#addReviewAnswer')
    const close = document.querySelector('#commentClose')
    const body = document.querySelector('body');

    if(answerArr && form && close && body) {
        if(!form.classList.contains('form--disable')) {
            body.style.overflow = 'hidden'
        }

        answerArr.forEach(item => item.addEventListener('click', toggleForm(form, body)))
        close.addEventListener('click', toggleForm(form, body))
    }
}

const toggleForm = (form, body) => (e) => {
    e.preventDefault();
    form.classList.toggle('form--disable');
    if (body.style.overflow === 'hidden') {
        body.style.overflow = '';
    } else {
        body.style.overflow = 'hidden'
    }
}


export default addReviewAnswerToggle
