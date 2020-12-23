import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../../FormComponent/Input";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import Textarea from "../../FormComponent/Textarea";
import editSelector from "../../../admin-helpers/editSelector";

const SEOMain = () => {
    const {tableItemEdit: seoEdit} = useSelector(editSelector);

    return (
        <div className="page-wrapper card mt-3 p-3">
            <h2>{seoEdit.title_index}</h2>
            {
                fields.map(({field, label}) =>
                    <Input field={field}
                           label={label}
                           ReduxObj={seoEdit}
                           onChange={generalInputOnChange(useDispatch)(field, seoEdit)}
                           key={field} />)
            }
            {
                textareas.map(({field, label}) =>
                    <Textarea field={field}
                              label={label}
                              ReduxObj={seoEdit}
                              onChange={generalInputOnChange(useDispatch)(field, seoEdit)}
                              key={field} />)
            }
        </div>
    )
}

export default SEOMain;

const fields = [
    {
        'field': 'title',
        'label': 'Название страницы'
    }
];

const textareas = [
    {
        'field': 'description',
        'label': 'Description'
    }, {
        'field': 'keywords',
        'label': 'Keywords'
    }
]
