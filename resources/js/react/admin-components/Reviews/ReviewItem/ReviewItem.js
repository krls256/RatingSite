import React from 'react';
import {Link} from "react-router-dom";
import WithContext from "../../../admin-hoc/WithContext";
import PublishingEditContext from "../ReviewsContexts/PublishingEditContext";
import Checkbox from "../../FormComponent/Checkbox/Checkbox";
import {toggleIsPublishedInTablePages} from "../../../admin-actions/table/tablePagesActions";
import {useDispatch, useSelector} from "react-redux";

const ReviewItem = ({data, isPublishingEdit, index}) => {

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
            <PublishingEditCell isPublishingEdit={isPublishingEdit} is_published={is_published} index={index}/>
        </tr>
    )
}

const PublishingEditCell = ({isPublishingEdit, is_published, index}) => {
    const dispatch = useDispatch();
    if(isPublishingEdit) {
        return (
            <td className='align-middle'>
                <Checkbox value={is_published} onChange={() => dispatch(toggleIsPublishedInTablePages(index))}/>
            </td>
        )
    }
    return null
}

export default WithContext(PublishingEditContext)(ReviewItem);
