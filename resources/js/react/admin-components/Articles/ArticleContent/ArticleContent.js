import React from 'react';
import {useSelector} from "react-redux";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";
import ArticleContentAbstract from "../ArticleContentAbstract";

const ArticleContent = () => {
    const {tableItemEdit} = useSelector(editSelector)
    console.log(tableItemEdit)
    const {article_html} = tableItemEdit;
    return (
        <div>
            <ArticleContentAbstract data={tableItemEdit} inputChange={generalInputOnChange} />
            <div className="markdown-body p-2 card mt-4" dangerouslySetInnerHTML={{__html: article_html}}>
            </div>
        </div>
    )
}

export default ArticleContent;
