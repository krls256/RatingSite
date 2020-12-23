import React from 'react';
import Input from "../../FormComponent/Input";
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";

const CompanySocialNetworks = () => {
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

export default CompanySocialNetworks;

const fields = [
    {
        'field': 'company_fb',
        'label': 'Facebook'
    },
    {
        'field': 'company_instagram',
        'label': 'Instagram'
    },
    {
        'field': 'company_ok',
        'label': 'Однокласники'
    },
    {
        'field': 'company_telegram',
        'label': 'Telegram'
    },
    {
        'field': 'company_twitter',
        'label': 'Twitter'
    },
    {
        'field': 'company_viber',
        'label': 'Viber'
    },
    {
        'field': 'company_vk',
        'label': 'Вконтакте'
    },
    {
        'field': 'company_whatsapp',
        'label': 'WhatsApp'
    },
]

const textarias = []
