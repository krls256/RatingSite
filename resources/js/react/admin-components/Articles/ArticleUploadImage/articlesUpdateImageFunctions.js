import isImage from "../../../admin-helpers/isImage";
import ArticlesService from "../../../admin-services/api-services/ArticlesService";
import {isLoadingSetFalse, isLoadingSetTrue} from "../../../admin-actions/appState/isLoadingActions";
import reactOnError from "../../../admin-helpers/error-reaction";
import {successMessageUpdate} from "../../../admin-actions/appState/successMessageActions";
import {addFileToItemEdit} from "../../../admin-actions/table/tableItemEditActions";
import {updateErrorsMessage} from "../../../admin-actions/appState/errorMessageActions";

const onImageUpload = (setErrorMessage, {apiToken, id}, dispatch, e) => {
    setErrorMessage(null)
    const files = e.target?.files;
    const file = files === null ? null : files[0];

    if (file) {
        if (isImage(file)) {
            uploadImage(file, {apiToken, id}, dispatch);
        } else {
            setErrorMessage('Файл не является картинкой, которые мы поддерживаем')
        }
    } else {
        setErrorMessage('Файл не загружен')
    }
}

export {
    onImageUpload
}

const uploadImage = (image, {apiToken, id}, dispatch) => {
    const service = new ArticlesService(apiToken, 'articles');

    dispatch(isLoadingSetTrue());

    service.uploadImage(id, image)
        .then((res) => {
            dispatch(isLoadingSetFalse())
            if (res.success) {
                dispatch(successMessageUpdate([res.msg]))
                dispatch(addFileToItemEdit(res.path));
            } else {
                dispatch(updateErrorsMessage([res.msg]))
            }
        })
        .catch(reactOnError(dispatch))

}

