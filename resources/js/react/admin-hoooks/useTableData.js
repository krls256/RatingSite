import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

const useTableData = (field, getFunc) => {
    const {apiToken, currentPage, d} = useSelector(selector(field));
    const dispatch = useDispatch()

    useEffect(() => {
        if (apiToken !== null && d[currentPage] === undefined)
            dispatch(getFunc())
    }, [apiToken, currentPage])


    return d[currentPage];

}

export default useTableData;

const selector = (field) => (data) => {
    const {apiToken, currentPage} = data;
    return {
        apiToken, currentPage, d: data[field]
    }
}
