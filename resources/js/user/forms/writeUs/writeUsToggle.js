import toggleForm from "../helpers/toggleForm";
import setInitialBodyOverflow from "../helpers/setInitialBodyOverflow";

const writeUsToggle = () => {
    const button = document.querySelector('#write');
    const form = document.querySelector('#writeUsForm');
    const close = document.querySelector('#writeClose');
    const body = document.querySelector('body');

    if(button && form && close && body) {
        setInitialBodyOverflow(form, body)
        if(button && close) {
            button.addEventListener('click', toggleForm(form, body))
            close.addEventListener('click', toggleForm(form, body))
        }
    }
}

export default writeUsToggle;
