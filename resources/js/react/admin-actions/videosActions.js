import VideosService from "../admin-services/api-services/VideosService";
import reactOnError from "../admin-helpers/error-reaction";
import {setLastPage} from "./lastPageActions";

const getVideos = () => (dispatch, getState) => {
    const {currentPage, apiToken} = getState();

    const service = new VideosService(apiToken);

    service.getVideos(currentPage)
        .then(({current_page, last_page, data}) => {
            dispatch(setVideos(current_page, data))
            dispatch(setLastPage(last_page));
        })
        .catch(reactOnError(dispatch))
}

const setVideos =  (key, payload) => ({type: 'videos/addPage', key, payload})

export {
    getVideos
}
