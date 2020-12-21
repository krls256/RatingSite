import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";

const getSeoEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();

    const service = new UniversalService(apiToken, 'seo-attributes')

    service.getEdit(id)
        .then(r => dispatch(updateSeoEdit(r)))
        .catch(reactOnError(dispatch));
}

const resetSeoEdit = () => ({type: 'seoEdit/reset'});
const updateSeoEdit = (payload) => ({type: 'seoEdit/update', payload});

const updateSeoMain = () => (dispatch, getState) => {
    const {apiToken, seoEdit} = getState();
    const {id} = seoEdit;

    const service = new UniversalService(apiToken, 'seo-attributes');

    updateStart(dispatch);

    service.update(id, seoEdit)
        .then(r => {
            updateFinish(dispatch, r)
            getSeoEdit(id)
        })
        .catch(reactOnError(dispatch))
}

export {
    getSeoEdit,
    resetSeoEdit,
    updateSeoEdit,
    updateSeoMain
}
