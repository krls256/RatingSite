import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import {setLastPage} from "../appState/lastPageActions";

const getReviewAnswers = () => (dispatch, getState) => {
    const {currentPage, apiToken} = getState()
    const service = new UniversalService(apiToken, 'review-answers');

    service.getPagination(currentPage)
        .then(({current_page, last_page, data}) => {
            dispatch(setReviewAnswers(current_page, data));
            dispatch(setLastPage(last_page));
        })
        .catch(reactOnError(dispatch))
}

const setReviewAnswers =  (key, payload) => ({type: 'reviewAnswers/addPage', key, payload})


export {
    getReviewAnswers
}
