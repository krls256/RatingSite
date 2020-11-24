import {combineReducers} from 'redux';
import companiesReducer from "./companiesReducer";
import apiTokenReducer from "./apiTokenReducer";
import companiesCurrentPageReducer from "./currentPageReducer";
import lastPageReducer from "./lastPageReducer";
import companyEditReducer from "./companyEditReducer";
import csrfTokenReducer from "./csrfTokenReducer";
import errorsMessageReducer from "./errorsMessageReducer";
import isLoadngReducer from "./isLoadingReducer";
import successMessageReducer from "./successMessageReducer";
import reviewsReducer from "./reviewsReducer";
import reviewEditReducer from "./reviewEditReducer";
import imagesReducer from "./imagesReducer";
import companiesShortListReducer from "./companiesShortListReducer";
import imagesCommandLineReducer from "./imagesCommandLineReducer";
import articlesReducer from "./articlesReducer";
import articleEditReducer from "./articleEditReducer";

export default combineReducers({
    errorsMessage: errorsMessageReducer,
    successMessage: successMessageReducer,
    isLoading: isLoadngReducer,

    apiToken: apiTokenReducer,
    csrfToken: csrfTokenReducer,

    currentPage: companiesCurrentPageReducer,
    lastPage: lastPageReducer,

    companies: companiesReducer,
    companiesShortList: companiesShortListReducer,
    companyEdit: companyEditReducer,

    reviews: reviewsReducer,
    reviewEdit: reviewEditReducer,

    images: imagesReducer,
    imagesCommandLine: imagesCommandLineReducer,

    articles: articlesReducer,
    articleEdit: articleEditReducer,
})
