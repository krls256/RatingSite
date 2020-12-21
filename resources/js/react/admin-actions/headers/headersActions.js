import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import {setLastPage} from "../appState/lastPageActions";

const getHeaders = () => (dispatch, getState) => {
    const {apiToken, currentPage} = getState();

    const service = new UniversalService(apiToken, 'headers')

    service.getPagination(currentPage)
        .then(({current_page, last_page, data}) => {
            dispatch(setLastPage(last_page))
            dispatch(setHeaders(current_page, data))
        })
        .catch(reactOnError(dispatch))
}

const setHeaders = (key, payload) => ({type: 'headers/addPage', key, payload})

export {
    getHeaders
}
