import {toggleNav} from './user/header'
import {printStars} from './user/stars'
import {toggleReviewForm} from './user/leave-review/index'


document.addEventListener('DOMContentLoaded', () => {
    toggleNav();
    printStars();
    toggleReviewForm();
})
