import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";

const getVideoEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();

    const service = new UniversalService(apiToken, 'videos');

    service.getEdit(id)
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

    const service = new UniversalService(apiToken, 'videos');

    updateStart(dispatch)

    service.update(video_id, videoEdit)
        .then(r => {
            updateFinish(dispatch, r);
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
