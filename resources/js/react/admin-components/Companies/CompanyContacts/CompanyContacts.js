import React from 'react';
import Input from "../../FormComponent/Input";
import {useDispatch, connect} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import {updateCompanyEdit} from "../../../admin-actions/companies/companyEditActions";

const CompanyContacts = ({companyEdit}) => {
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({field, label})=>
                    <Input field={field}
                           label={label}
                           ReduxObj={companyEdit}
                           onChange={generalInputOnChange(useDispatch, updateCompanyEdit)(field, companyEdit)}
                           key={field}/>)
            }
            {
                textarias.map(({field, label}) =>
                    <Textarea field={field}
                              label={label}
                              ReduxObj={companyEdit}
                              onChange={generalInputOnChange(useDispatch, updateCompanyEdit)(field, companyEdit)}
                              key={field}/>)
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
