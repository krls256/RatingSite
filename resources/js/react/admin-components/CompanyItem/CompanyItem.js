import React from 'react';
import {Link} from 'react-router-dom'

const CompanyItem = ({data}) => {
    const {company_id, company_name, company_average_mark} = data;
    return (
            <tr className='c-dark'>
                <th scope="row">{company_id}</th>
                <td>{company_name}</td>
                <td>{company_average_mark}</td>
                <td>
                    <Link to={`/admin/companies/${company_id}/edit`} className='table-list table-list_companies h-silver'>
                        Изменить
                    </Link>
                </td>
            </tr>
    )
}

export default CompanyItem;
