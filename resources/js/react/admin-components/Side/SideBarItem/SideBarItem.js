import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetCurrentPage} from '../../../admin-actions/appState/currentPageActions';

const SideBarItem = ({path, name, func}) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(resetCurrentPage());
        if(func) {
            dispatch(func());
        }
    }
    return (
        <Link to={path} className={'navbar-brand'} onClick={onClick}>{name}</Link>
    )
}

export default SideBarItem;
