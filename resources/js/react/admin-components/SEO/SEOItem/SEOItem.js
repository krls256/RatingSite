import React from 'react';
import {Link} from "react-router-dom";

const SEOItem = ({data}) => {
    const {id, title_index, title} = data

    return (
        <tr className='c-dark'>
            <th scope="row" >{id}</th>
            <td>{title_index}</td>
            <td>{title}</td>
            <td>
                <Link to={`/admin/seo/${id}/edit`} className='table-list table-list_companies h-silver'>
                    Читать/Изменить
                </Link>
            </td>
        </tr>
    )
}

export default SEOItem;
