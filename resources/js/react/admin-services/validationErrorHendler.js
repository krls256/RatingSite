import {updateErrors} from '../admin-actions/errorActions'

const handleError =  (error) => {
    return updateErrors(error.response.data.errors);
}

export default handleError;
