const protectEachForm = () => {
    const ReCaptchaKey = document.querySelector('meta[name="g-recaptcha"]').content;
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            grecaptcha.ready(function() {
                grecaptcha.execute(ReCaptchaKey, {action: 'submit'}).then(function(token) {
                    const el = `<input name="g-recaptcha-response" value="${token}" type="hidden"/>`
                    form.insertAdjacentHTML('beforeend', el);
                    form.submit();
                });
            });
        })
    })
}

export default protectEachForm;
