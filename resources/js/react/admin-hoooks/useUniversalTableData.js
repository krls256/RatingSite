import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTablePage} from "../admin-actions/table/tablePagesActions";

const useUniversalTableData = (tableName) => {
    const {apiToken, currentPage, tablePages} = useSelector(selector);
    const dispatch = useDispatch()

    useEffect(() => {
        if (apiToken !== null && tablePages[currentPage] === undefined)
            dispatch(getTablePage(tableName))
    }, [apiToken, currentPage, tablePages[currentPage]])


    return tablePages[currentPage];

}

export default useUniversalTableData;

const selector =  ({apiToken, currentPage, tablePages}) => ({apiToken, currentPage, tablePages})
