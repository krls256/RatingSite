import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import {setLastPage} from "../appState/lastPageActions";

const getSEO = () => (dispatch, getState) => {
    const {apiToken, currentPage} = getState();

    const service = new UniversalService(apiToken, 'seo-attributes');

    service.getPagination(currentPage)
        .then(({current_page, last_page, data}) => {
            dispatch(setSEO(current_page, data));
            dispatch(setLastPage(last_page));
        })
        .catch(reactOnError(dispatch))
}

const setSEO = (key, payload) => ({key, payload, type: 'seo/addPage'});

export {
    getSEO
}
