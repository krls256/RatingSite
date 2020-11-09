import React from 'react';
import Input from "../Input";
import reviewInputOnChange from "../../admin-services/InputOnChange/reviewInputOnChange";
import {useDispatch, useSelector} from "react-redux";
import checkboxToggle from '../../admin-services/InputOnChange/checkboxToggle'
import {updateReviewEdit} from '../../admin-actions/reviewsEditActions'

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
            <label className='checkbox'>
                <input
                    className='checkbox__input'
                    name="is_published"
                    type="checkbox"
                    checked={reviewEdit.is_published}
                    value={reviewEdit.is_published}
                    onChange={checkboxToggle(useDispatch, updateReviewEdit)(reviewEdit)}/>
                    <span className="checkbox__fake"></span>
                    <span>Опубликовано</span>
            </label>
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
