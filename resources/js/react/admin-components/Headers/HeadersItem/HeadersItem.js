import React from 'react';
import {Link} from "react-router-dom";

const HeadersItem = ({data}) => {
    const {header_id, header_key, header_value, header_description} = data;
    return (
        <tr className='c-dark'>
            <th scope="row">{header_id}</th>
            <td>{header_key}</td>
            <td className='text-overflow-25'>{header_value}</td>
            <td>{header_description}</td>
            <td>
                <Link to={`/admin/headers/${header_id}/edit`} className='table-list table-list_companies h-silver'>
                    Изменить
                </Link>
            </td>
        </tr>
    )
}

export default HeadersItem
