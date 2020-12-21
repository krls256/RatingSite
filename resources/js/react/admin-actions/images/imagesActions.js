import ImagesService from "../../admin-services/api-services/ImagesService";
import {setLastPage} from "../appState/lastPageActions";
import reactOnError from "../../admin-helpers/error-reaction";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";

const getImages = () => (dispatch, getState) => {
    const {apiToken, currentPage, imagesCommandLine} = getState()
    const service = new ImagesService(apiToken, 'images');

    service.getImages(currentPage, imagesCommandLine)
        .then(({current_page, data, last_page}) => {
            dispatch(setLastPage(last_page));
            dispatch(addImagePage(current_page, data));
        })
        .catch(reactOnError(dispatch));
}

const updateImages = () => (dispatch, getState) => {
    const {apiToken, currentPage, images} = getState();

    const service = new ImagesService(apiToken, 'images');

    updateStart(dispatch);

    service.updatePage(images[currentPage])
        .then(r => updateFinish(dispatch, r))
        .catch(reactOnError(dispatch))
}

const addImagePage = (key, payload) => ({type: 'images/addImagesPage', key, payload});

const updateImagePage = (pageKey, key, payload) => ({type: 'images/updateImagesPage', pageKey, key, payload});

const resetImages = () => ({type: 'images/resetImages'})

export {getImages, updateImagePage, resetImages, updateImages}
