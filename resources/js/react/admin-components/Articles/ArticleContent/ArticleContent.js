import React from 'react';
import {useSelector} from "react-redux";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";
import ArticleContentAbstract from "../ArticleContentAbstract";

const ArticleContent = () => {
    const {tableItemEdit} = useSelector(editSelector)

    return <ArticleContentAbstract data={tableItemEdit} inputChange={generalInputOnChange} />
}

export default ArticleContent;
