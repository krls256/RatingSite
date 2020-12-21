import React from 'react';
import {Link} from "react-router-dom";

const ReviewAnswersItem = ({data}) => {
    const {review_answer_id, reviewer_answer_name, review_answer_text, review_id, is_published} = data;

    const className = is_published ? 'c-dark' : 'c-dark table-list__item_unpublished';
    return (
        <tr className={className}>
            <th scope="row" >{review_answer_id}</th>
            <td>{reviewer_answer_name}</td>
            <td >
                <Link to={`/admin/review-answers/${review_id}/review`} className='table-list table-list_companies h-silver'>
                    Отзыв
                </Link>
            </td>
            <td>
                <Link to={`/admin/review-answers/${review_answer_id}/edit`} className='table-list table-list_companies h-silver'>
                    Читать/Изменить
                </Link>
            </td>
        </tr>
    )

}

export default ReviewAnswersItem
