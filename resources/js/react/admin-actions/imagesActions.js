import ImagesService from "../admin-services/api-services/ImagesService";
import {setLastPage} from "./lastPageActions";
import {resetErrorsMessage, updateErrorsMessage} from "./errorMessageActions";
import {successMessageReset, successMessageUpdate} from "./successMessageActions";
import {isLoadingSetFalse, isLoadingSetTrue} from "./isLoadingActions";

const getImages = () => (dispatch, getState) => {
    const {apiToken, currentPage, imagesCommandLine} = getState()
    const service = new ImagesService(apiToken);

    service.getImages(currentPage, imagesCommandLine)
        .then(({current_page, data, last_page}) => {

            dispatch(setLastPage(last_page));
            dispatch(addImagePage(current_page, data));

        })
        .catch(({value, status}) => {
            const errors = value.errors ? value.errors : {};
            errors.err = [`Сервер ответил ошибкой с кодом ${status}`]
            dispatch(updateErrorsMessage(errors))
        });
}

const updateImages = () => (dispatch, getState) => {
    const {apiToken, currentPage, images} = getState();

    const service = new ImagesService(apiToken);

    dispatch(resetErrorsMessage());
    dispatch(successMessageReset())
    dispatch(isLoadingSetTrue())

    service.updatePage(images[currentPage])
        .then(d => {
            dispatch(successMessageUpdate(d))
            dispatch(isLoadingSetFalse())
        })
        .catch(({value, status}) => {
            const errors = value.errors ? value.errors : {};
            errors.err = [`Сервер ответил ошибкой с кодом ${status}`]
            dispatch(updateErrorsMessage(errors))
        })
}

const addImagePage = (key, payload) => ({type: 'images/addImagesPage', key, payload});

const updateImagePage = (pageKey, key, payload) => ({type: 'images/updateImagesPage', pageKey, key, payload});

const resetImages = () => ({type: 'images/resetImages'})

export {getImages, updateImagePage, resetImages, updateImages}
