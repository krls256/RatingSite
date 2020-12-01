import {updateErrorsMessage} from "../admin-actions/errorMessageActions";
import {isLoadingSetFalse} from "../admin-actions/isLoadingActions";

const reactOnError = (dispatch) => ({value, status}) => {
    const errors = value.errors ? value.errors : {};
    errors.err = [`Сервер ответил ошибкой с кодом ${status}`]
    dispatch(updateErrorsMessage(errors))
    dispatch(isLoadingSetFalse())
}

export default reactOnError;
