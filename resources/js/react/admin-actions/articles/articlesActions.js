import UniversalService from "../../admin-services/api-services/UniversalService";
import {setLastPage} from "../appState/lastPageActions";
import reactOnError from "../../admin-helpers/error-reaction";

const getArticles = () => (dispatch, getState) => {
    const {currentPage, apiToken} = getState()

    const service = new UniversalService(apiToken, 'articles');

    service.getPagination(currentPage)
        .then(({current_page, last_page, data}) => {
            dispatch(setArticles(current_page, data));
            dispatch(setLastPage(last_page));
        })
        .catch(reactOnError(dispatch))
}

const setArticles = (key, payload) => ({type: 'articles/addPage', key, payload})

export {
    getArticles
}
