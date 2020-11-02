import React from 'react';
import {connect, useDispatch} from "react-redux";
import Input from "../Input";
import inputOnChange from "../../admin-services/inputOnChange";
import Textarea from "../Textarea";

const CompanyMain = ({companyEdit}) => {
    return (
        <div className="page-wrapper card m-3 p-3 col-8">
            {
                fields.map(({field, label})=>
                    <Input field={field}
                           label={label}
                           ReduxObj={companyEdit}
                           onChange={inputOnChange(useDispatch)(field, companyEdit)}
                           key={field}/>)
            }
            {
                textarias.map(({field, label}) => {
                    return (
                            <Textarea field={field}
                                      label={label}
                                      ReduxObj={companyEdit}
                                      onChange={inputOnChange(useDispatch)(field, companyEdit)}
                                      key={field}/>
                        )

                })
            }
        </div>
    )
}
const mapStateToProps = ({companyEdit}) => ({companyEdit})

export default connect(mapStateToProps)(CompanyMain);

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
        'label': 'Адресс компании'
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
        'field': 'company_tin',
        'label': 'Инн'
    }
]
