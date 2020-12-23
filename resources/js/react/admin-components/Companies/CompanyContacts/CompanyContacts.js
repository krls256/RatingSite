import React from 'react';
import Input from "../../FormComponent/Input";
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";

const CompanyContacts = () => {
    const {tableItemEdit: companyEdit} = useSelector(editSelector)
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({field, label}) =>
                    <Input field={field}
                           label={label}
                           ReduxObj={companyEdit}
                           onChange={generalInputOnChange(useDispatch)(field, companyEdit)}
                           key={field} />)
            }
            {
                textarias.map(({field, label}) =>
                    <Textarea field={field}
                              label={label}
                              ReduxObj={companyEdit}
                              onChange={generalInputOnChange(useDispatch)(field, companyEdit)}
                              key={field} />)
            }
        </div>
    )
}

export default CompanyContacts;

const fields = [
    {
        'field': 'company_email',
        'label': 'Почта компании'
    },
    {
        'field': 'company_phone',
        'label': 'Номер телефона'
    },
    {
        'field': 'company_site',
        'label': 'Сайт'
    }
]

const textarias = []
