import React from 'react';
import {useSelector} from "react-redux";
import editSelector from "../../../admin-helpers/editSelector";

const ArticleView = () => {
    const {tableItemEdit} = useSelector(editSelector)
    const {article_html} = tableItemEdit;
    return (
        <div>
            <div className="markdown-body p-2 card mt-4" dangerouslySetInnerHTML={{__html: article_html}}>
            </div>
        </div>
    )
}

export default ArticleView;
