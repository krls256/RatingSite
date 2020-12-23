import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../../FormComponent/Input";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";

const CompanyMain = () => {
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

export default CompanyMain;

const textarias = [
    {
        'field': 'company_description',
        'label': 'Описание компании'
    }
]

const fields = [
    {
        'field': 'company_name',
        'label': 'Название компании'
    },
    {
        'field': 'company_address',
        'label': 'Адрес компании'
    },
    {
        'field': 'company_city',
        'label': 'Город компании'
    },
    {
        'field': 'company_creating_date',
        'label': 'Дата создания компарии (YYYY-MM-DD)'
    },
    {
        'field': 'company_description_styles',
        'label': 'Дополнительние стили описания'
    },
    {
        'field': 'company_logo_link',
        'label': 'Ссылка на логотип'
    },
    {
        'field': 'company_yandex_map_link',
        'label': 'Ссылка на Яндекс-карту'
    },
    {
        'field': 'company_slug',
        'label': 'URL-идентификатор'
    },
    {
        'field': 'company_inn',
        'label': 'Инн'
    }
]
