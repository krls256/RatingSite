import React from 'react';
import reviewInputOnChange from "../../../admin-services/InputOnChange/reviewInputOnChange";
import {useDispatch, useSelector} from "react-redux";
import Input from "../../FormComponent/Input";

const ReviewImmutable = () => {
    const {reviewEdit} = useSelector(selector)
    return (
        <div className="page-wrapper card m-3 p-3 col-8">
            {
                fields.map(({field, label})=>
                    <Input field={field}
                           label={label}
                           disabled
                           ReduxObj={reviewEdit}
                           onChange={reviewInputOnChange(useDispatch)(field, reviewEdit)}
                           key={field}/>)
            }
        </div>
    )
}

const selector = ({reviewEdit}) => ({reviewEdit})

export default ReviewImmutable;

const fields = [
    {
        'field': 'review_link',
        'label': 'Ссылка на отзыв'
    },
    {
        'field': 'source_id',
        'label': 'Источник отзыва'
    }
]
