import CompaniesService from "../admin-services/api-services/CompaniesService";
import {updateErrorsMessage} from "./errorMessageActions";

const getShortList = () => (dispatch, getState) => {
    const {apiToken} = getState();

    const service = new CompaniesService(apiToken)

    service.getShortList()
        .then(d => {
            dispatch(setShortList(d))
        })
        .catch(({value, status}) => {
            const errors = value.errors ? value.errors : {};
            errors.err = [`Сервер ответил ошибкой с кодом ${status}`]
            dispatch(updateErrorsMessage(errors))
        })
}


const setShortList = (payload) => ({type: 'companiesShortList/setShortList', payload})

export {getShortList}
