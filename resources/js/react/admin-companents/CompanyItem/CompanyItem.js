import React from 'react';
import {Link} from 'react-router-dom'

const CompanyItem = ({id, name, averageMark}) => {
    return (
        <li className='list-group-item'>
            <Link to={`/admin/companies/${id}/edit`} className='table-list table-list_companies'>
                <div className='table-list__item'>{id}</div>
                <div className='table-list__item'>{name}</div>
                <div className='table-list__item'>Средний рейтинг:{averageMark}</div>
            </Link>
        </li>
    )
}

export default CompanyItem;
