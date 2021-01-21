import React from 'react';
import {useSelector} from "react-redux";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";
import checkboxToggle from "../../../admin-services/InputOnChange/checkboxToggle";
import ArticleMainAbstract from "../ArticleMainAbstract";

const ArticleMain = () => {
    const {tableItemEdit} = useSelector(editSelector)
    return <ArticleMainAbstract data={tableItemEdit} inputChange={generalInputOnChange}
                                checkboxChange={checkboxToggle} />
}

export default ArticleMain;

