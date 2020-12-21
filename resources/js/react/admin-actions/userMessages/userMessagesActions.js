import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import {setLastPage} from "../appState/lastPageActions";

const getUserMessages = () => (dispatch, getState) => {
    const {currentPage, apiToken} = getState()

    const service = new UniversalService(apiToken, 'user-messages');

    service.getPagination(currentPage)
        .then(({current_page, last_page, data}) => {
            dispatch(setUserMessages(current_page, data));
            dispatch(setLastPage(last_page));
        })
        .catch(reactOnError(dispatch))
}

const setUserMessages = (key, payload) => ({type: 'userMessages/addPage', key, payload})


export {
    getUserMessages
}
