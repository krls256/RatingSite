import UniversalService from "../../admin-services/api-services/UniversalService";
import {setLastPage} from "../appState/lastPageActions";
import reactOnError from "../../admin-helpers/error-reaction";

export const getReviews = () => (dispatch, getState) => {
    const {apiToken, currentPage} = getState()
    const service = new UniversalService(apiToken, 'reviews')

    service.getPagination(currentPage)
        .then(({last_page, current_page, data}) => {
            dispatch(setLastPage(last_page));
            dispatch(addReviewPage(current_page, data))
        })
        .catch(reactOnError(dispatch))
}

const addReviewPage = (key, payload) => ({type: "reviews/addReviewsPage", key, payload})
