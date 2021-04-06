import UniversalService from "../../admin-services/api-services/UniversalService";
import reactOnError from "../../admin-helpers/error-reaction";
import {setLastPage} from "../appState/lastPageActions";


const getTablePage = (tableName) => (dispatch, getState) => {
    const {currentPage, apiToken, filterAttributes} = getState();

    const service = new UniversalService(apiToken, tableName)

    service.getPagination(currentPage, filterAttributes)
        .then(({current_page, last_page, data}) => {
            dispatch(setLastPage(last_page));
            dispatch(setTablePage(current_page, data))
        })
        .catch(reactOnError(dispatch))
}

const setTablePage = (key, payload) => ({type: 'tablePages/addPage', key, payload});

const resetTablePages = () => ({type: 'tablePages/reset'});
const deleteTablePages = () => (dispatch, getState) => {
    const {currentPage} = getState();

    dispatch(deleteTablePagesCore(currentPage))
};

const deleteTablePagesCore = (payload) => ({type: 'tablePages/delete', payload})

const toggleIsPublishedInTablePages = (index) => (dispatch, getState) => {
    const {currentPage} = getState();
    dispatch({type: 'tablePages/toggleIsPublish', page: currentPage, index})
}

const substituteTablePages = (payload) => ({type: 'tablePages/substitute', payload})


export {
    substituteTablePages,
    getTablePage,
    resetTablePages,
    deleteTablePages,
    toggleIsPublishedInTablePages
}
