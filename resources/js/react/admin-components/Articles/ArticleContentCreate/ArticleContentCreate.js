import React from 'react';
import {useSelector} from "react-redux";
import createSelector from "../../../admin-helpers/createSelector";
import ArticleContentAbstract from "../ArticleContentAbstract";
import createInputOnChange from "../../../admin-services/InputOnChange/createInputOnChenge";

const ArticleContentCreate = () => {
    const {tableItemCreate} = useSelector(createSelector);

    return <ArticleContentAbstract data={tableItemCreate} inputChange={createInputOnChange}/>
}

export default ArticleContentCreate
