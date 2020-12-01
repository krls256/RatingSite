import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetCurrentPage} from '../../../admin-actions/currentPageActions';

const SideBarItem = ({path, name}) => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(resetCurrentPage())
    }
    return (
        <Link to={path} className={'navbar-brand'} onClick={onClick}>{name}</Link>
    )
}

export default SideBarItem;
