import CompaniesService from "../admin-services/api-services/CompaniesService";
import handleError from "../admin-services/validationErrorHendler";
import {resetErrorsMessage} from './errorMessageActions'
import {isLoadingSetFalse, isLoadingSetTrue} from './isLoadingActions'
import {successMessageReset, successMessageUpdate} from "./successMessageActions";
import reactOnError from "../admin-helpers/error-reaction";

export const getCompanyEdit = (id) => (dispatch, getState) => {
    const apiToken = getState().apiToken;
    const companiesService = new CompaniesService(apiToken)
    companiesService.getEdit(id)
        .then(res => dispatch(updateCompanyEdit(res)))
        .catch(reactOnError(dispatch))
}

export const updateCompanyEdit = (payload) => ({'type': 'companyEdit/update', payload});

export const resetCompanyEdit = () => ({'type': 'companyEdit/reset'});

export const updateCompanyMain = () => (dispatch, getState) => {
    const {apiToken, csrfToken, companyEdit} = getState();
    const {company_id: id} = companyEdit;
    const service = new CompaniesService(apiToken);

    dispatch(resetErrorsMessage());
    dispatch(successMessageReset())
    dispatch(isLoadingSetTrue())

    service.update(csrfToken)(id, companyEdit)
        .then(body => {
            dispatch(getCompanyEdit(id))
            dispatch(successMessageUpdate(body.data))
            dispatch(isLoadingSetFalse())
        })
        .catch(err => {
            dispatch(handleError(err))
            dispatch(isLoadingSetFalse())
        })
}
