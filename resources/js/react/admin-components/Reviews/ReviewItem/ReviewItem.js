import React from 'react';
import {Link} from "react-router-dom";

const ReviewItem = ({data}) => {
    const {review_id, reviewer_name, review_mark, review_date, is_published} = data
    const classList = is_published ? 'c-dark' : 'c-dark table-list__item_unpublished';
    const fontColor = review_mark > 3 ? 'text-success' : 'text-danger';
    return (
        <tr className={classList}>
            <th scope="row" >{review_id}</th>
            <td>{reviewer_name}</td>
            <td className={fontColor}>{review_mark}</td>
            <td>{review_date}</td>
            <td>
                <Link to={`/admin/reviews/${review_id}/edit`} className='table-list table-list_companies h-silver'>
                    Изменить
                </Link>
            </td>
        </tr>
    )
}

export default ReviewItem;
