const setInitialBodyOverflow = (form, body) => {
    if(!form.classList.contains('form--disable')) {
        body.style.overflow = 'hidden'
    }
}

export default setInitialBodyOverflow;
