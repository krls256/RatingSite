import toggleForm from "../helpers/toggleForm";
import setInitialBodyOverflow from "../helpers/setInitialBodyOverflow";

const addReviewAnswerToggle = () => {
    const answerArr = document.querySelectorAll('.reviews__item')
    const form = document.querySelector('#addReviewAnswer')
    const close = document.querySelector('#commentClose')
    const body = document.querySelector('body');

    if(answerArr && form && close && body) {
        setInitialBodyOverflow(form, body);
        answerArr.forEach(item => {
            const {identifier : id} = item.dataset;

            const link = item.querySelector('[data-toggle="addReviewAnswer"]');
            link.addEventListener('click', onClick(form, id, body));
        })
        close.addEventListener('click', toggleForm(form, body))
    }
}

const onClick = (form, id, body) => (e) => {
    e.preventDefault();
    toggleForm(form, body)()
    const idInput = form.querySelector('[name=review_id]');
    const nameInput = form.querySelector('[name=reviewer_answer_name]');
    const textInput = form.querySelector('[name=review_answer_text]');
    idInput.value = id;
    nameInput.value = '';
    textInput.value = '';
}


export default addReviewAnswerToggle
