import toggleForm from "../helpers/toggleForm";
import setInitialBodyOverflow from "../helpers/setInitialBodyOverflow";

const toggleReviewForm = () => {
    const button = document.querySelector('#leave-review');
    const form = document.querySelector('#leaveReviewForm');
    const close = document.querySelector('#leaveClose');
    const body = document.querySelector('body');

    if(button && form && close && body) {
        setInitialBodyOverflow(form, body)

        button.addEventListener('click', toggleForm(form, body))
        close.addEventListener('click', toggleForm(form, body))
    }
}



export default toggleReviewForm;
