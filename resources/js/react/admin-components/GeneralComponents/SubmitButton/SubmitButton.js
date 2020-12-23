import React from 'react';
import {useDispatch} from "react-redux";
import {useParams} from 'react-router-dom'
import {updateTableItemMain} from "../../../admin-actions/table/tableItemEditActions";

const SubmitButton = ({tableName}) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const onClick = (e) => {
        e.preventDefault();
        dispatch(updateTableItemMain(tableName, id))
    }
    return (
            <button type='submit' onClick={onClick} className='btn b-dark c-white'>Сохранить</button>
    )
}


export default SubmitButton;
