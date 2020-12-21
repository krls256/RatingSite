import {resetErrorsMessage} from "../admin-actions/appState/errorMessageActions";
import {successMessageReset} from "../admin-actions/appState/successMessageActions";
import {isLoadingSetTrue} from "../admin-actions/appState/isLoadingActions";

const updateStart = (dispatch) => {
    dispatch(resetErrorsMessage());
    dispatch(successMessageReset());
    dispatch(isLoadingSetTrue());
}

export default updateStart;
