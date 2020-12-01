import ArticlesService from "../admin-services/api-services/ArticlesService";
import {resetErrorsMessage, updateErrorsMessage} from "./errorMessageActions";
import {successMessageReset, successMessageUpdate} from "./successMessageActions";
import {isLoadingSetTrue, isLoadingSetFalse} from "./isLoadingActions";


const getArticleEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();

    const service = new ArticlesService(apiToken);

    service.getArticleEdit(id)
        .then(r => {
            dispatch(setArticleEdit(r));
        })
        .catch(({value, status}) => {
            const errors = value.errors ? value.errors : {};
            errors.err = [`Сервер ответил ошибкой с кодом ${status}`]
            dispatch(updateErrorsMessage(errors))
        })
}


const updateArticleMain = () => (dispatch, getState) => {
    const {apiToken, articleEdit} = getState()
    const {article_id} = articleEdit;
    const service = new ArticlesService(apiToken);

    dispatch(resetErrorsMessage());
    dispatch(successMessageReset())
    dispatch(isLoadingSetTrue())

    service.update(article_id, articleEdit)
        .then(r => {
            dispatch(successMessageUpdate(r))
            dispatch(isLoadingSetFalse())
            dispatch(getArticleEdit(article_id))
        })
        .catch(({value, status}) => {
            const errors = value.errors ? value.errors : {};
            errors.err = [`Сервер ответил ошибкой с кодом ${status}`]
            dispatch(updateErrorsMessage(errors))
            dispatch(isLoadingSetFalse())
        })
}

const resetArticleEdit = () => ({type: 'articleEdit/reset'})

const setArticleEdit = (payload) => ({type: 'articleEdit/update', payload})

export {
    getArticleEdit,
    resetArticleEdit,
    setArticleEdit,
    updateArticleMain
}
