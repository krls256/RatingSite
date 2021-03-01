import {isLoadingSetFalse, isLoadingSetTrue} from "../../../admin-actions/appState/isLoadingActions";
import ArticlesService from "../../../admin-services/api-services/ArticlesService";
import reactOnError from "../../../admin-helpers/error-reaction";
import {successMessageUpdate} from "../../../admin-actions/appState/successMessageActions";

const onSubmitSuggestion = (dispatch, {apiToken, id, file, afterSuccess}, e) => {
    e.preventDefault();

    const service = new ArticlesService(apiToken, 'articles');

    dispatch(isLoadingSetTrue());
    service.updateMainImage(id, file)
        .then((response) => {
            dispatch(isLoadingSetFalse());
            dispatch(successMessageUpdate(response))
            afterSuccess()
        })
        .catch(reactOnError(dispatch))
}


const onMainImageChange = (setValue) => (e) => {
    setValue(e.target.files[0] || null)
}

const checkFileType = (file) => {
    const types = ['image/png', 'image/jpg', 'image/jpeg'];
    return !!types.find(type => type === file.type);
}

const handleFileInput = (file, setErrorMessage, setSuggestToUpdate) => {
    if (file !== null) {
        if (checkFileType(file) === false) {
            setErrorMessage('Неверный тип файла')
            setSuggestToUpdate(false);
        } else {
            setErrorMessage(null);
            setSuggestToUpdate(true);
        }
    }
}

export {onSubmitSuggestion, onMainImageChange, checkFileType, handleFileInput}
