import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";

const ReviewText = () => {
    const {tableItemEdit: reviewEdit} = useSelector(editSelector)
    return (
        <div className="page-wrapper card mt-3 p-3">

            {
                textarias.map(({field, label}) =>
                    <Textarea field={field}
                              label={label}
                              ReduxObj={reviewEdit}
                              onChange={generalInputOnChange(useDispatch)(field, reviewEdit)}
                              key={field} />)
            }
        </div>
    )
}

export default ReviewText;

const textarias = [
    {
        field: 'review_text',
        label: 'Текст отзыва'
    }
]


