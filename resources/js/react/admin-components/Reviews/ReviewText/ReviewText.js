import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import {updateReviewEdit} from "../../../admin-actions/reviews/reviewsEditActions";

const ReviewText = () => {
    const {reviewEdit} = useSelector(selector)
    return (
        <div className="page-wrapper card mt-3 p-3">

            {
                textarias.map(({field, label}) =>
                    <Textarea field={field}
                              label={label}
                              ReduxObj={reviewEdit}
                              onChange={generalInputOnChange(useDispatch, updateReviewEdit)(field, reviewEdit)}
                              key={field} />)
            }
        </div>
    )
}

const selector = ({reviewEdit}) => ({reviewEdit})

export default ReviewText;

const textarias = [
    {
        field: 'review_text',
        label: 'Текст отзыва'
    }
]


