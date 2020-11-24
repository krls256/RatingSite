import React from 'react';
import Input from "../Input";
import reviewInputOnChange from "../../admin-services/InputOnChange/reviewInputOnChange";
import {useDispatch, useSelector} from "react-redux";
import checkboxToggle from '../../admin-services/InputOnChange/checkboxToggle'
import {updateReviewEdit} from '../../admin-actions/reviewsEditActions'
import Checkbox from "../Checkbox/Checkbox";

const ReviewMain = () => {
    const {reviewEdit} = useSelector(selector)
    return (
        <div className="page-wrapper card m-3 p-3 col-8">
            {
                fields.map(({field, label})=>
                    <Input field={field}
                           label={label}
                           ReduxObj={reviewEdit}
                           onChange={reviewInputOnChange(useDispatch)(field, reviewEdit)}
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
