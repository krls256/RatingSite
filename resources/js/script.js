import {toggleNav} from './user/header';
import {printStars, formStars} from './user/stars';
import {toggleReviewForm} from './user/forms/leave-review';
import {writeUsToggle} from './user/forms/writeUs';
import {watchVideo} from './user/watchVideo';
import {addReviewAnswerToggle} from './user/forms/addReviewAnswer'
import {footerToBottom} from './user/footer'
import protectEachForm from "./user/reCaptcha";


document.addEventListener('DOMContentLoaded', () => {
    toggleNav();
    printStars();
    toggleReviewForm();
    formStars();
    writeUsToggle();
    watchVideo();
    addReviewAnswerToggle();
    footerToBottom();
    protectEachForm();
})
