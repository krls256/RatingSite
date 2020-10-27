import {combineReducers} from 'redux';
import companiesReducer from "./companiesReducer";
import apiTokenReducer from "./apiTokenReducer";
import companiesCurrentPageReducer from "./currentPageReducer";
import lastPageReducer from "./lastPageReducer";

export default combineReducers({
    companies: companiesReducer,
    apiToken: apiTokenReducer,
    currentPage: companiesCurrentPageReducer,
    lastPage: lastPageReducer
})
