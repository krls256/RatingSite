const toggleForm = (block, body) => () => {
    block.classList.toggle('form--disable');
    if (body.style.overflow === 'hidden') {
        body.style.overflow = '';
    } else {
        body.style.overflow = 'hidden'
    }
}

export default toggleForm;
