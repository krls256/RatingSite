import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../../FormComponent/Input";
import Textarea from "../../FormComponent/Textarea";
import Checkbox from "../../FormComponent/Checkbox/Checkbox";
import checkboxToggle from "../../../admin-services/InputOnChange/checkboxToggle";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";

const ReviewAnswerMain = () => {
    const {tableItemEdit: reviewAnswerEdit} = useSelector(editSelector)
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({label, field}) => (
                    <Input label={label}
                           field={field}
                           ReduxObj={reviewAnswerEdit}
                           key={field}
                           onChange={generalInputOnChange(useDispatch,)(field, reviewAnswerEdit)} />
                ))
            }
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={reviewAnswerEdit}
                              key={field}
                              onChange={generalInputOnChange(useDispatch)(field, reviewAnswerEdit)} />
                ))
            }
            <Checkbox label='Опубликовано'
                      value={reviewAnswerEdit.is_published}
                      onChange={checkboxToggle(useDispatch)(reviewAnswerEdit)} />
        </div>
    )
}

export default ReviewAnswerMain;

const fields = [
    {
        field: 'reviewer_answer_name',
        label: 'Имя',
    }
]

const textareas = [
    {
        field: 'review_answer_text',
        label: 'Текст комментария',
    }
]
