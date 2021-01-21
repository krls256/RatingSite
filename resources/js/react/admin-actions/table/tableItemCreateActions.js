import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import prepareCreateResponse from "../../admin-helpers/prepareCreateResponse";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";
import {updateRedirect} from "../appState/redirectActions";


const getTableItemCreate = (tableName) => (dispatch, getState) => {
    const {apiToken} = getState()

    const service = new UniversalService(apiToken, tableName);

    service.getCreate()
        .then(r =>
            dispatch(
                setTableItemCreate(
                    prepareCreateResponse(r))))
        .catch(reactOnError(dispatch))
}

const setTableItemCreate = (payload) => ({type: 'tableItemCreate/update', payload});

const createTableItem = (tableName) => (dispatch, getState) => {
    const {apiToken, tableItemCreate} = getState()

    const service = new UniversalService(apiToken, tableName);

    updateStart(dispatch)

    service.store(tableItemCreate)
        .then(r => {
            const id = r.id;
            delete  r.id;
            updateFinish(dispatch, r)
            dispatch(updateRedirect(id))
        })
        .catch(reactOnError(dispatch))
}
export {getTableItemCreate, setTableItemCreate, createTableItem};
