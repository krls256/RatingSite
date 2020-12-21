import UniversalService from "../../admin-services/api-services/UniversalService";
import {setLastPage} from '../appState/lastPageActions';
import reactOnError from "../../admin-helpers/error-reaction";


const getCompanies = () => (dispatch, getState) => {
    const {apiToken, currentPage} = getState();
    const service = new UniversalService(apiToken, 'companies');

    service.getPagination(currentPage)
        .then(({current_page, last_page, data}) => {
            dispatch(setLastPage(last_page));
            dispatch(addCompaniesPage(current_page, data))
        })
        .catch(reactOnError(dispatch))
}



const addCompaniesPage = (key, payload) => ({type: "companies/addCompaniesPage", key, payload})

export {
    getCompanies
}
