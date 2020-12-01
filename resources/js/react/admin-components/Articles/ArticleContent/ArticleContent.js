import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import articleInputOnChange from "../../../admin-services/InputOnChange/articleInputOnChange";

const ArticleContent = () => {
    const {articleEdit} = useSelector(selector)

    return (
        <div className="page-wrapper card m-3 p-3 col-8">
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

const selector = ({articleEdit}) => ({articleEdit})

export default ArticleContent;

const textareas = [
    {
        'field': 'article_content',
        'label': 'Контент'
    },
]
