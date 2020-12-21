import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

const useEditData = (field, getFunc, returnFunc) => {
    const {apiToken, d} = useSelector(selector(field));
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {

        if(apiToken) {
            dispatch(getFunc(id))
        }
        return () => dispatch(returnFunc())
    }, [id, apiToken])

    const returnData = {id};
    returnData[field] = d;
    return returnData;
}

const selector = (field) => (data) => {
    return   {
        apiToken: data.apiToken,
        d: data[field]
    };
};

export default useEditData;
