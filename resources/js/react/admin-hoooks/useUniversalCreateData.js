import {useSelector, useDispatch} from "react-redux";
import {useEffect} from 'react';
import {getTableItemCreate} from "../admin-actions/table/tableItemCreateActions";

const useUniversalCreateData = (tableName) => {
    const {apiToken, tableItemCreate, redirect} = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        if(apiToken) {
            dispatch(getTableItemCreate(tableName))
        }
    }, [apiToken])


    return {tableItemCreate, redirect}
}

const selector = ({apiToken, tableItemCreate, redirect}) => ({apiToken, tableItemCreate, redirect})


export default useUniversalCreateData
