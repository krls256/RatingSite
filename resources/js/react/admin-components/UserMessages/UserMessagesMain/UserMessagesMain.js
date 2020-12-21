import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../../FormComponent/Input";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import {setUserMessagesEdit} from "../../../admin-actions/userMessages/userMessageEditActions";
import Checkbox from "../../FormComponent/Checkbox/Checkbox";
import checkboxToggle from "../../../admin-services/InputOnChange/checkboxToggle";

const UserMessagesMain = () => {
    const {userMessageEdit} = useSelector(selector)
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({label, field}) => (
                    <Input label={label}
                           field={field}
                           ReduxObj={userMessageEdit}
                           key={field}
                           onChange={generalInputOnChange(useDispatch, setUserMessagesEdit)(field, userMessageEdit)}/>
                ))
            }
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={userMessageEdit}
                              key={field}
                              onChange={generalInputOnChange(useDispatch, setUserMessagesEdit)(field, userMessageEdit)}/>
                ))
            }
            <Checkbox label='Отправлено на почту (поставить галочку, если не желаете получить это сообщение ближайшим письмом)'
                      value={userMessageEdit.is_send}
                      onChange={checkboxToggle(useDispatch, setUserMessagesEdit, 'is_send')(userMessageEdit)}/>
        </div>
    )
}

const selector = ({userMessageEdit}) => ({userMessageEdit});

export default UserMessagesMain;

const fields = [
    {
        field: 'user_name',
        label: 'Имя',
    }, {
        field: 'user_email',
        label: 'Почта',
    }
]

const textareas = [
    {
        field: 'user_message',
        label: 'Письмо',
    }
]
