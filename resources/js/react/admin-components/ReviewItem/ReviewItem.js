import React from 'react';
import {Link} from "react-router-dom";

const ReviewItem = ({id, name, mark, date, isPublished}) => {
    const classList = isPublished ? 'c-dark' : 'c-dark table-list__item_unpublished';
    const fontColor = mark > 3 ? 'text-success' : 'text-danger';
    return (
        <tr className={classList}>
            <th scope="row" >{id}</th>
            <td>{name}</td>
            <td className={fontColor}>{mark}</td>
            <td>{date}</td>
            <td>
                <Link to={`/admin/reviews/${id}/edit`} className='table-list table-list_companies h-silver'>
                    Изменить
                </Link>
            </td>
        </tr>
    )
}

export default ReviewItem;
