import handleError from "../../admin-services/validationErrorHendler";
import {isLoadingSetFalse} from '../appState/isLoadingActions'
import reactOnError from "../../admin-helpers/error-reaction";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";
import UniversalService from "../../admin-services/api-services/UniversalService";

const getCompanyEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();
    const service = new UniversalService(apiToken, 'companies');

    service.getEdit(id)
        .then(res => dispatch(updateCompanyEdit(res)))
        .catch(reactOnError(dispatch))
}


const updateCompanyMain = () => (dispatch, getState) => {
    const {apiToken, companyEdit} = getState();
    const {company_id: id} = companyEdit;
    const service = new UniversalService(apiToken, 'companies');

    updateStart(dispatch)
    service.update(id, companyEdit)
        .then(r => {
            updateFinish(dispatch, r)
            dispatch(getCompanyEdit(id))
        })
        .catch(err => {
            dispatch(handleError(err))
            dispatch(isLoadingSetFalse())
        })
}

const updateCompanyEdit = (payload) => ({'type': 'companyEdit/update', payload});

const resetCompanyEdit = () => ({'type': 'companyEdit/reset'});

export {
    updateCompanyMain,
    resetCompanyEdit,
    updateCompanyEdit,
    getCompanyEdit
}
