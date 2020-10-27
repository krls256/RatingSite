import CompaniesService from "../admin-services/CompaniesService";
import {setLastPage} from './lastPageActions'
export const getCompanies = (page) => (dispatch, getState) => {
    const apiToken = getState().apiToken;
    const companiesService = new CompaniesService(apiToken);
    companiesService.getCompanies(page)
        .then(body => {
            dispatch(setLastPage(body.last_page));
            const currentPage = body.current_page;
            const companies = body.data
            dispatch(addCompaniesPage(currentPage, companies))
        })
}



const addCompaniesPage = (key, payload) => ({type: "companies/addCompaniesPage", key, payload})
