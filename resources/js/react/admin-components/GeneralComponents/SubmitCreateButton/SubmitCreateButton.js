import React from 'react';
import SubmitButtonAbstract from "../SubmitButtonAbstract";
import {useDispatch} from "react-redux";
import {createTableItem} from "../../../admin-actions/table/tableItemCreateActions";

const SubmitCreateButton = ({tableName}) => {
    const dispatch = useDispatch();
    const onClick = (e) => {
        e.preventDefault();
        dispatch(createTableItem(tableName));
    };

    return <SubmitButtonAbstract onClick={onClick}/>
}

export default SubmitCreateButton
