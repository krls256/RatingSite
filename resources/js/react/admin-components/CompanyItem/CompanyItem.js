import React from 'react';
import {Link} from 'react-router-dom'

const CompanyItem = ({id, name, averageMark}) => {
    return (
            <tr className='c-dark'>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{averageMark}</td>
                <td>
                    <Link to={`/admin/companies/${id}/edit`} className='table-list table-list_companies h-silver'>
                        Изменить
                    </Link>
                </td>
            </tr>
    )
}

export default CompanyItem;
