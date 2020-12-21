import {successMessageUpdate} from "../admin-actions/appState/successMessageActions";
import {isLoadingSetFalse} from "../admin-actions/appState/isLoadingActions";

const updateFinish = (dispatch, response) => {
    dispatch(successMessageUpdate(response))
    dispatch(isLoadingSetFalse())
}

export default updateFinish;
