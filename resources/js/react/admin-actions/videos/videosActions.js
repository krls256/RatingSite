import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import {setLastPage} from "../appState/lastPageActions";

const getVideos = () => (dispatch, getState) => {
    const {currentPage, apiToken} = getState();

    const service = new UniversalService(apiToken, 'videos');

    service.getPagination(currentPage)
        .then(({current_page, last_page, data}) => {
            dispatch(setVideos(current_page, data))
            dispatch(setLastPage(last_page));
        })
        .catch(reactOnError(dispatch))
}

const setVideos = (key, payload) => ({type: 'videos/addPage', key, payload})

export {
    getVideos
}
