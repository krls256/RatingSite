import {updateErrorsMessage} from "../admin-actions/appState/errorMessageActions";
import {isLoadingSetFalse} from "../admin-actions/appState/isLoadingActions";

const reactOnError = (dispatch) => ({value, status}) => {
    let errors = value.errors ? value.errors : {};
    errors.err = [`Сервер ответил ошибкой с кодом ${status}`];
    if(value.msg) {
        errors.err = [...errors.err, ...value.msg];
    }
    dispatch(updateErrorsMessage(errors))
    dispatch(isLoadingSetFalse())
}

export default reactOnError;
