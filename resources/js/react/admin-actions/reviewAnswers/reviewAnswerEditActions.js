import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";

const getReviewAnswerEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();

    const service = new UniversalService(apiToken, 'review-answers');

    service.getEdit(id)
        .then(r => {
            dispatch(setReviewAnswerEdit(r));
        })
        .catch(reactOnError(dispatch))
}

const setReviewAnswerEdit = (payload) => ({type: 'reviewAnswerEdit/update', payload});

const resetReviewAnswerEdit = () => ({type: 'reviewAnswerEdit/reset'});

const updateReviewAnswerMain = () => (dispatch, getState) => {
    const {apiToken, reviewAnswerEdit} = getState();
    const {review_answer_id: id} = reviewAnswerEdit;
    const service = new UniversalService(apiToken, 'review-answers');

    updateStart(dispatch);

    service.update(id, reviewAnswerEdit)
        .then(r => {
            updateFinish(dispatch, r);
            dispatch(getReviewAnswerEdit(id));
        })
        .catch(reactOnError(dispatch))
}

export {
    resetReviewAnswerEdit,
    getReviewAnswerEdit,
    updateReviewAnswerMain,
    setReviewAnswerEdit
}
