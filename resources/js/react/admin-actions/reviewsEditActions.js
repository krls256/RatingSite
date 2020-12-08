import ReviewsService from "../admin-services/api-services/ReviewsService";
import {resetErrorsMessage, updateErrorsMessage} from './errorMessageActions'
import {successMessageReset, successMessageUpdate} from "./successMessageActions";
import {isLoadingSetFalse, isLoadingSetTrue} from "./isLoadingActions";

export const resetReviewEdit = () => ({type: 'reviewEdit/reset'});
export const updateReviewEdit = (payload) => ({type: 'reviewEdit/update', payload});

export const getReviewEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();
    const service = new ReviewsService(apiToken)
    service.getEdit(id)
        .then(r => {
            dispatch(updateReviewEdit(r))
        })
        .catch(er => dispatch(updateErrorsMessage({'err': [`Сервер ответил ошибкой с кодом ${er}`]})));
}


export const updateReviewMain = () => (dispatch, getState) => {
    const {apiToken, reviewEdit} = getState();
    const {review_id: id} = reviewEdit;
    const service = new ReviewsService(apiToken)

    dispatch(resetErrorsMessage());
    dispatch(successMessageReset())
    dispatch(isLoadingSetTrue())

    service.update(id, reviewEdit)
        .then(r => {
            dispatch(getReviewEdit(id))
            dispatch(successMessageUpdate(r))
            dispatch(isLoadingSetFalse())
        })
        .catch(({status, value}) => {
            const errors = value.errors ? value.errors : {};
            errors.err = [`Сервер ответил ошибкой с кодом ${status}`]
            dispatch(updateErrorsMessage(errors))
            dispatch(isLoadingSetFalse())
        })
}
