import React from 'react';
import Input from "../../FormComponent/Input";
import {useDispatch} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import Checkbox from "../../FormComponent/Checkbox/Checkbox";

const ArticleMainAbstract = ({data, inputChange, checkboxChange}) => {
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({label, field}) => (
                    <Input label={label}
                           field={field}
                           ReduxObj={data}
                           key={field}
                           onChange={inputChange(useDispatch)(field, data)} />
                ))
            }
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={data}
                              key={field}
                              onChange={inputChange(useDispatch)(field, data)} />
                ))
            }
            <Checkbox label={'Опубликовано'}
                      value={data.is_published}
                      onChange={checkboxChange(useDispatch)(data)} />
        </div>
    )
}

export default ArticleMainAbstract;

const fields = [
    {
        field: 'article_title',
        label: 'Название',
    }
];

const textareas = [
    {
        field: 'article_description',
        label: 'Короткое описание',
    }
];
