import React from 'react';
import {useDispatch} from "react-redux";
import {useParams} from 'react-router-dom'
import {updateTableItemMain} from "../../../admin-actions/table/tableItemEditActions";
import SubmitButtonAbstract from "../SubmitButtonAbstract";

const SubmitButton = ({tableName}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const onClick = (e) => {
        e.preventDefault();
        dispatch(updateTableItemMain(tableName, id))
    }
    return <SubmitButtonAbstract onClick={onClick}/>
}


export default SubmitButton;
