import React from 'react';
import Input from "../Input";
import companyInputOnChange from "../../admin-services/InputOnChange/companyInputOnChange";
import {useDispatch, connect} from "react-redux";
import Textarea from "../Textarea";

const CompanyContacts = ({companyEdit}) => {
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

export default connect(mapStateToProps)(CompanyContacts)

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

const textarias = [

]
