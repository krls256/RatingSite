const writeUsToggle = () => {
    const button = document.querySelector('#write');
    const block = document.querySelector('.write-us');
    const close = document.querySelector('#writeClose');
    const body = document.querySelector('body');

    if(block && !block.classList.contains('write-us--disable')) {
        body.style.overflow = 'hidden'
    }
    if(button && close) {
        button.addEventListener('click', toggleForm(block, body))
        close.addEventListener('click', toggleForm(block, body))
    }

}

const toggleForm = (block, body) => () => {
    block.classList.toggle('write-us--disable');
    if (body.style.overflow === 'hidden') {
        body.style.overflow = '';
    } else {
        body.style.overflow = 'hidden'
    }
}

export default writeUsToggle;
