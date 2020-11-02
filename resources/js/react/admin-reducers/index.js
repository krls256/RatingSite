import {combineReducers} from 'redux';
import companiesReducer from "./companiesReducer";
import apiTokenReducer from "./apiTokenReducer";
import companiesCurrentPageReducer from "./currentPageReducer";
import lastPageReducer from "./lastPageReducer";
import companyEditReducer from "./companyEditReducer";
import csrfTokenReducer from "./csrfTokenReducer";
import errorsReducer from "./errorsReducer";
import isLoadngReducer from "./isLoadingReducer";
import successMessageReducer from "./successMessageReducer";

export default combineReducers({
    errors: errorsReducer,
    successMessage: successMessageReducer,
    companies: companiesReducer,
    apiToken: apiTokenReducer,
    csrfToken: csrfTokenReducer,
    currentPage: companiesCurrentPageReducer,
    lastPage: lastPageReducer,
    companyEdit: companyEditReducer,
    isLoading: isLoadngReducer,
})
