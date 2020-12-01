import React from 'react';
import {useDispatch} from "react-redux";

const SubmitButton = ({action}) => {
    const dispatch = useDispatch();
    const onClick = (e) => {
        e.preventDefault();
        dispatch(action())
    }
    return (
            <button type='submit' onClick={onClick} className='btn b-dark c-white'>Сохранить</button>
    )
}


export default SubmitButton;
