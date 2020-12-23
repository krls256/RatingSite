import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";

const ArticleContent = () => {
    const {tableItemEdit: articleEdit} = useSelector(editSelector)

    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={articleEdit}
                              key={field}
                              onChange={generalInputOnChange(useDispatch)(field, articleEdit)} />
                ))
            }
        </div>
    )
}

export default ArticleContent;

const textareas = [
    {
        'field': 'article_content',
        'label': 'Контент'
    },
];
