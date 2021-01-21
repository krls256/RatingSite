import React from 'react';
import Textarea from "../../FormComponent/Textarea";
import {useDispatch} from "react-redux";

const ArticleContentAbstract = ({data, inputChange}) => {
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={data}
                              key={field}
                              onChange={inputChange(useDispatch)(field, data)} />
                ))
            }
        </div>
    )
}

export default ArticleContentAbstract;

const textareas = [
    {
        'field': 'article_content',
        'label': 'Контент'
    },
];
