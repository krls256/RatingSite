const footerToBottom = () => {
    const footer = document.querySelector('.footer');
    const body = document.querySelector('body')
    const {bottom: footerBottom} = footer.getBoundingClientRect();
    const {bottom: bodyBottom} = body.getBoundingClientRect();


    if(bodyBottom > footerBottom) {
        footer.style.position = 'absolute';
        footer.style.bottom = 0;
        footer.style.left = 0;
    }
}

export default footerToBottom;
