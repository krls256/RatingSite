import React from 'react';
import Input from "../Input";
import companyInputOnChange from "../../admin-services/InputOnChange/companyInputOnChange";
import {useDispatch, connect} from "react-redux";
import Textarea from "../Textarea";

const CompanySocialNetworks = ({companyEdit}) => {
    return (
        <div className="page-wrapper card m-3 p-3 col-8">
            {
                fields.map(({field, label})=>
                    <Input field={field}
                           label={label}
                           ReduxObj={companyEdit}
                           onChange={companyInputOnChange(useDispatch)(field, companyEdit)}
                           key={field}/>)
            }
            {
                textarias.map(({field, label}) => {
                    return (
                        <Textarea field={field}
                                  label={label}
                                  ReduxObj={companyEdit}
                                  onChange={companyInputOnChange(useDispatch)(field, companyEdit)}
                                  key={field}/>
                    )

                })
            }
        </div>
    )
}
const mapStateToProps = ({companyEdit}) => ({companyEdit})

export default connect(mapStateToProps)(CompanySocialNetworks);

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

const textarias = [

]
