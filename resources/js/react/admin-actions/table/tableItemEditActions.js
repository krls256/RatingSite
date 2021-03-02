import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";


const getTableItemEdit = (tableName, id) => (dispatch, getState) => {
    const {apiToken} = getState()

    const service = new UniversalService(apiToken, tableName);

    service.getEdit(id)
        .then(r => dispatch(setTableItemEdit(r)))
        .catch(reactOnError(dispatch))
}


const setTableItemEdit = (payload) => ({type: 'tableItemEdit/update', payload});

const resetTableItemEdit = () => ({type: 'tableItemEdit/reset'});

const updateTableItemMain = (tableName, id) => (dispatch, getState) => {
    const {apiToken, tableItemEdit} = getState()

    const service = new UniversalService(apiToken, tableName);

    updateStart(dispatch)

    service.update(id, tableItemEdit)
        .then(r => {
            updateFinish(dispatch, r)
            dispatch(getTableItemEdit(tableName, id))
        })
        .catch(reactOnError(dispatch))
}

const addFileToItemEdit = (payload) => ({type: 'tableItemEdit/addFile', payload})
const removeFileFromItemEdit = (payload) => ({type: 'tableItemEdit/removeFile', payload})

export {
    getTableItemEdit,
    resetTableItemEdit,
    setTableItemEdit,
    updateTableItemMain,
    addFileToItemEdit,
    removeFileFromItemEdit
}
