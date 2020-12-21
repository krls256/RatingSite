import CompaniesService from "../../admin-services/api-services/CompaniesService";
import reactOnError from "../../admin-helpers/error-reaction";

const getShortList = () => (dispatch, getState) => {
    const {apiToken} = getState();

    const service = new CompaniesService(apiToken, 'companies')

    service.getShortList()
        .then(d => {
            dispatch(setShortList(d))
        })
        .catch(reactOnError(dispatch))
}


const setShortList = (payload) => ({type: 'companiesShortList/setShortList', payload})

export {getShortList}
