import {updateErrorsMessage} from '../admin-actions/appState/errorMessageActions'

const handleError =  (error) => {
    return updateErrorsMessage(error.response.data.errors);
}

export default handleError;
