import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";


const getArticleEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState();
    const service = new UniversalService(apiToken, 'articles');
    service.getEdit(id)
        .then(r => dispatch(setArticleEdit(r)))
        .catch(reactOnError(dispatch))
}


const updateArticleMain = () => (dispatch, getState) => {
    const {apiToken, articleEdit} = getState()
    const {article_id} = articleEdit;
    const service = new UniversalService(apiToken, 'articles');

    updateStart(dispatch);

    service.update(article_id, articleEdit)
        .then(r => {
            updateFinish(dispatch, r);
            dispatch(getArticleEdit(article_id))
        })
        .catch(reactOnError(dispatch))
}

const resetArticleEdit = () => ({type: 'articleEdit/reset'})

const setArticleEdit = (payload) => ({type: 'articleEdit/update', payload})

export {
    getArticleEdit,
    resetArticleEdit,
    setArticleEdit,
    updateArticleMain
}
