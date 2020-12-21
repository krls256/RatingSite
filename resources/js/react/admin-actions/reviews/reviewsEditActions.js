import UniversalService from "../../admin-services/api-services/UniversalService";
import updateStart from "../../admin-helpers/updateStart";
import reactOnError from "../../admin-helpers/error-reaction";
import updateFinish from "../../admin-helpers/updateFinish";

export const resetReviewEdit = () => ({type: 'reviewEdit/reset'});
export const updateReviewEdit = (payload) => ({type: 'reviewEdit/update', payload});

export const getReviewEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();
    const service = new UniversalService(apiToken, 'reviews')

    service.getEdit(id)
        .then(r => {
            dispatch(updateReviewEdit(r))
        })
        .catch(reactOnError(dispatch));
}


export const updateReviewMain = () => (dispatch, getState) => {
    const {apiToken, reviewEdit} = getState();
    const {review_id: id} = reviewEdit;
    const service = new UniversalService(apiToken, 'reviews')

    updateStart(dispatch)

    service.update(id, reviewEdit)
        .then(r => {
            updateFinish(dispatch, r)
            dispatch(getReviewEdit(id))
        })
        .catch(reactOnError(dispatch))
}
