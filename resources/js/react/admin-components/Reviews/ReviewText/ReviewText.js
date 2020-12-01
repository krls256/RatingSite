import React from 'react';
import reviewInputOnChange from "../../../admin-services/InputOnChange/reviewInputOnChange";
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../FormComponent/Textarea";

const ReviewText = () => {
    const {reviewEdit} = useSelector(selector)
    return (
        <div className="page-wrapper card m-3 p-3 col-8">

            {
                textarias.map(({field, label}) =>
                        <Textarea field={field}
                                  label={label}
                                  ReduxObj={reviewEdit}
                                  onChange={reviewInputOnChange(useDispatch)(field, reviewEdit)}
                                  key={field}/>
                          )
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


