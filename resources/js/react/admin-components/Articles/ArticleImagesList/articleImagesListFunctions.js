import ArticlesService from "../../../admin-services/api-services/ArticlesService";
import reactOnError from "../../../admin-helpers/error-reaction";
import {isLoadingSetFalse, isLoadingSetTrue} from "../../../admin-actions/appState/isLoadingActions";
import {successMessageUpdate} from "../../../admin-actions/appState/successMessageActions";
import {updateErrorsMessage} from "../../../admin-actions/appState/errorMessageActions";
import {removeFileFromItemEdit} from "../../../admin-actions/table/tableItemEditActions";

const sendRequestToDeleteImage = (fileName, storeData, dispatch) => {
    const {apiToken} = storeData;
    const service = new ArticlesService(apiToken, 'articles');

    dispatch(isLoadingSetTrue())
    service.deleteImage(fileName)
        .then((res) => {
            dispatch(isLoadingSetFalse())
            if (res.success) {
                dispatch(successMessageUpdate([res.msg]))
                dispatch(removeFileFromItemEdit(fileName));
            } else {
                dispatch(updateErrorsMessage([res.msg]))
            }
        })
        .catch(reactOnError(dispatch))
}

export {
    sendRequestToDeleteImage
}
