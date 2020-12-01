import VideosService from "../admin-services/api-services/VideosService";
import reactOnError from "../admin-helpers/error-reaction";
import {resetErrorsMessage} from "./errorMessageActions";
import {successMessageReset, successMessageUpdate} from "./successMessageActions";
import {isLoadingSetFalse, isLoadingSetTrue} from "./isLoadingActions";

const getVideoEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();

    const service = new VideosService(apiToken);

    service.getVideoEdit(id)
        .then(r => {
            dispatch(setVideoEdit(r))
        })
        .catch(reactOnError(dispatch))
}

const setVideoEdit = (payload) => ({type: 'videoEdit/update', payload})

const resetVideoEdit = () => ({type: 'videoEdit/reset'})

const updateVideoMain = () => (dispatch, getState) => {
    const {apiToken, videoEdit} = getState();
    const {video_id} = videoEdit;

    const service = new VideosService(apiToken);

    dispatch(resetErrorsMessage());
    dispatch(successMessageReset())
    dispatch(isLoadingSetTrue())

    service.update(video_id, videoEdit)
        .then(r => {
            dispatch(successMessageUpdate(r))
            dispatch(isLoadingSetFalse())
            dispatch(getVideoEdit(video_id))
        })
        .catch(reactOnError(dispatch))


}


export {
    getVideoEdit,
    resetVideoEdit,
    setVideoEdit,
    updateVideoMain
}
