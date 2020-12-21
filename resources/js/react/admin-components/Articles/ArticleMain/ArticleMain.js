import React, {} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import Input from "../../FormComponent/Input";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import {setArticleEdit} from "../../../admin-actions/articles/articlesEditAction";

const ArticleMain = () => {
    const {articleEdit} = useSelector(selector)

    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({label, field}) => (
                    <Input label={label}
                           field={field}
                           ReduxObj={articleEdit}
                           key={field}
                           onChange={generalInputOnChange(useDispatch, setArticleEdit)(field, articleEdit)}/>
                ))
            }
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={articleEdit}
                              key={field}
                              onChange={generalInputOnChange(useDispatch, setArticleEdit)(field, articleEdit)}/>
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
