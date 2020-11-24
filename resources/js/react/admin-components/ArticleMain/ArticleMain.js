import React, {} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../Textarea";
import articleInputOnChange from "../../admin-services/InputOnChange/articleInputOnChange";
import Input from "../Input";

const ArticleMain = () => {
    const {articleEdit} = useSelector(selector)

    return (
        <div className="page-wrapper card m-3 p-3 col-8">
            {
                fields.map(({label, field}) => (
                    <Input label={label}
                           field={field}
                           ReduxObj={articleEdit}
                           key={field}
                           onChange={articleInputOnChange(useDispatch)(field, articleEdit)}/>
                ))
            }
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={articleEdit}
                              key={field}
                              onChange={articleInputOnChange(useDispatch)(field, articleEdit)}/>
                ))
            }
        </div>
    )
}

const selector = ({articleEdit}) => ({articleEdit});

export default ArticleMain;

const fields = [
    {
        field: 'article_title',
        label: 'Название',
    },
    {
        field: 'article_main_image',
        label: 'Путь к картинке',
    },
    {
        field: 'article_slug',
        label: 'Адресный идентификатор',
    }
]

const textareas = [
    {
        field: 'article_description',
        label: 'Короткое описание',
    }
]
