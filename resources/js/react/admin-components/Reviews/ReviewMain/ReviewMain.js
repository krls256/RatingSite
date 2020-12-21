import React from 'react';
import Input from "../../FormComponent/Input";
import {useDispatch, useSelector} from "react-redux";
import checkboxToggle from '../../../admin-services/InputOnChange/checkboxToggle'
import {updateReviewEdit} from '../../../admin-actions/reviews/reviewsEditActions'
import Checkbox from "../../FormComponent/Checkbox/Checkbox";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";

const ReviewMain = () => {
    const {reviewEdit} = useSelector(selector)
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({field, label})=>
                    <Input field={field}
                           label={label}
                           ReduxObj={reviewEdit}
                           onChange={generalInputOnChange(useDispatch, updateReviewEdit)(field, reviewEdit)}
                           key={field}/>)
            }
            <Checkbox label={'Опубликовано'}
                      value={reviewEdit.is_published}
                      onChange={checkboxToggle(useDispatch, updateReviewEdit)(reviewEdit)}/>
        </div>
    )
}

const selector = ({reviewEdit}) => ({reviewEdit})

export default ReviewMain

const fields = [
    {
        'field': 'reviewer_name',
        'label': 'Никнейм'
    },
    {
        'field': 'review_date',
        'label': 'Дата (YYYY-MM-DD)'
    },
    {
        'field': 'review_mark',
        'label': 'Оценка'
    }
]
