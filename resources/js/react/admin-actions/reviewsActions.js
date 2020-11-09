import ReviewsService from "../admin-services/ReviewsService";
import {updateErrorsMessage} from './errorMessageActions'
import {setLastPage} from "./lastPageActions";

export const getReviews = (currentPage) => (dispatch, getState) => {
    const {apiToken} = getState()
    const service = new ReviewsService(apiToken)

    service.getReviews(currentPage)
        .then(body => {
            dispatch(setLastPage(body.last_page));
            const currentPage = body.current_page;
            const companies = body.data
            dispatch(addReviewPage(currentPage, companies))
        })
        .catch(er => {
            dispatch(updateErrorsMessage({'err': [`Сервер ответил ошибкой с кодом ${er}`]}))
        })
}

const addReviewPage = (key, payload) => ({type: "reviews/addReviewsPage", key, payload})
