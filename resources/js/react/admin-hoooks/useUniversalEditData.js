import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getTableItemEdit, resetTableItemEdit} from "../admin-actions/table/tableItemEditActions";

const useUniversalEditData = (tableName) => {
    const {apiToken, tableItemEdit} = useSelector(selector);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {

        if(apiToken) {
            dispatch(getTableItemEdit(tableName,id))
        }
        return () => dispatch(resetTableItemEdit())
    }, [id, apiToken])

    return {id, tableItemEdit};
}

const selector = ({apiToken, tableItemEdit}) => ({apiToken, tableItemEdit});

export default useUniversalEditData;
