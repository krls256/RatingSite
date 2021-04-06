import {combineReducers} from 'redux';
import apiTokenReducer from "./tokens/apiTokenReducer";
import companiesCurrentPageReducer from "./appState/currentPageReducer";
import lastPageReducer from "./appState/lastPageReducer";
import csrfTokenReducer from "./tokens/csrfTokenReducer";
import errorsMessageReducer from "./appState/errorsMessageReducer";
import isLoadngReducer from "./appState/isLoadingReducer";
import successMessageReducer from "./appState/successMessageReducer";
import imagesReducer from "./images/imagesReducer";
import companiesShortListReducer from "./companies/companiesShortListReducer";
import imagesCommandLineReducer from "./images/imagesCommandLineReducer";
import filterAttributesReducer from "./filterAttributes/filterAttributesReducer";
import tablePagesReducer from "./table/tablePagesReducer";
import tableItemEditReducer from "./table/tableItemEditReducer";
import tableItemCreateReducer from "./table/tableItemCreateReducer";
import redirectReducer from "./appState/redirectReducer";
import formDataReducer from "./formData/formDataReducer";
import modalReducer from "./appState/modalReducer";
import tablePagesEditingReducer from "./table/tablePagesEditingReducer";

export default combineReducers({
    errorsMessage: errorsMessageReducer,
    successMessage: successMessageReducer,
    isLoading: isLoadngReducer,
    modal: modalReducer,

    apiToken: apiTokenReducer,
    csrfToken: csrfTokenReducer,

    currentPage: companiesCurrentPageReducer,
    lastPage: lastPageReducer,

    companiesShortList: companiesShortListReducer,


    images: imagesReducer,
    imagesCommandLine: imagesCommandLineReducer,



    tablePages: tablePagesReducer,
    tablePagesEditing: tablePagesEditingReducer,
    tableItemEdit: tableItemEditReducer,
    tableItemCreate: tableItemCreateReducer,

    filterAttributes: filterAttributesReducer,

    redirect: redirectReducer,
    formData: formDataReducer
})
