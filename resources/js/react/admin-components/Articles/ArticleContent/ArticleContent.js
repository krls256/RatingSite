import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import {setArticleEdit} from "../../../admin-actions/articles/articlesEditAction";

const ArticleContent = () => {
    const {articleEdit} = useSelector(selector)

    return (
        <div className="page-wrapper card mt-3 p-3">
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

const selector = ({articleEdit}) => ({articleEdit})

export default ArticleContent;

const textareas = [
    {
        'field': 'article_content',
        'label': 'Контент'
    },
]
