import ArticlesService from "../admin-services/api-services/ArticlesService";
import {updateErrorsMessage} from "./errorMessageActions";
import {setLastPage} from "./lastPageActions";

const getArticles = () => (dispatch, getState) => {
    const {currentPage, apiToken} = getState()

    const service = new ArticlesService(apiToken);

    service.getArticles(currentPage)
        .then(({current_page, last_page, data}) => {
            dispatch(setArticles(current_page, data));
            dispatch(setLastPage(last_page));
        })
        .catch(({value, status}) => {
            const errors = value.errors ? value.errors : {};
            errors.err = [`Сервер ответил ошибкой с кодом ${status}`]
            dispatch(updateErrorsMessage(errors))
        })
}

const setArticles = (key, payload) => ({type: 'articles/addPage', key, payload})

export {
    getArticles
}
