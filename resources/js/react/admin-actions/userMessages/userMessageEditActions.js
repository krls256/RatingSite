import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import updateStart from "../../admin-helpers/updateStart";
import updateFinish from "../../admin-helpers/updateFinish";

const getUserMessageEdit = (id) => (dispatch, getState) => {
    const {apiToken} = getState()

    const service = new UniversalService(apiToken, 'user-messages');
    service.getEdit(id)
        .then(r => dispatch(setUserMessagesEdit(r)))
        .catch(reactOnError(dispatch))

}

const resetUserMessagesEdit = () => ({type: 'userMessageEdit/reset'});

const setUserMessagesEdit = (payload) => ({type: 'userMessageEdit/update', payload});

const updateUserMessagesMain = () => (dispatch, getState) => {
    const {apiToken, userMessageEdit} = getState()
    const {message_id: id} = userMessageEdit;
    const service = new UniversalService(apiToken, 'user-messages');

    updateStart(dispatch);

    service.update(id, userMessageEdit)
        .then(r => {
            updateFinish(dispatch, r)
            dispatch(getUserMessageEdit(id))
        })
        .catch(reactOnError(dispatch))

}

export {
    getUserMessageEdit,
    resetUserMessagesEdit,
    setUserMessagesEdit,
    updateUserMessagesMain
}
