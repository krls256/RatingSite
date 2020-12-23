import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../../FormComponent/Input";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";

const ReviewImmutable = () => {
    const {tableItemEdit: reviewEdit} = useSelector(editSelector)
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({field, label}) =>
                    <Input field={field}
                           label={label}
                           disabled
                           ReduxObj={reviewEdit}
                           onChange={generalInputOnChange(useDispatch)(field, reviewEdit)}
                           key={field} />)
            }
        </div>
    )
}

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
