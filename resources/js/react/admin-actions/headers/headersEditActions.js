import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";

const getHeaderEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();

    const service = new UniversalService(apiToken, 'headers')
    service.getEdit(id)
        .then(r => dispatch(updateHeaderEdit(r)))
        .catch(reactOnError(dispatch));
}

const updateHeaderEdit = (payload) => ({type: 'headerEdit/update', payload});

const resetHeaderEdit = () => ({type: 'headerEdit/reset'});

const updateHeaderMain = () => (dispatch, getState) => {
    const {apiToken, headerEdit} = getState();
    const {header_id} = headerEdit;
    const service = new UniversalService(apiToken, 'headers')

    updateStart(dispatch);

    service.update(header_id, headerEdit)
        .then(r => {
            updateFinish(dispatch, r);
            dispatch(getHeaderEdit(header_id));
        })
        .catch(reactOnError(dispatch))
}

export {
    resetHeaderEdit,
    getHeaderEdit,
    updateHeaderEdit,
    updateHeaderMain
}
