import {successMessageUpdate} from "../admin-actions/appState/successMessageActions";
import {isLoadingSetFalse} from "../admin-actions/appState/isLoadingActions";
import {deleteTablePages} from "../admin-actions/table/tablePagesActions";

const updateFinish = (dispatch, response) => {
    dispatch(successMessageUpdate(response))
    dispatch(isLoadingSetFalse())
    dispatch(deleteTablePages())
}

export default updateFinish;
