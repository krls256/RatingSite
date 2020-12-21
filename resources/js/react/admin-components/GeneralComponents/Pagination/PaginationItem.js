import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setCurrentPage} from '../../../admin-actions/appState/currentPageActions';

const PaginationItem = ({data, current = false}) => {
    const link = `?page=${data}`;
    const additionalClass = current ? "page-link active" : "page-link";
    const dispatch = useDispatch();
    if(data === 0 || data === -1) {
        return (
            <li className="page-item page-link">...</li>
        )
    }

    return (
        <li className="page-item" onClick={() => dispatch(setCurrentPage(data))}>
            <Link className={additionalClass} to={link}>{data}</Link>
        </li>
    );
}

export default PaginationItem;
