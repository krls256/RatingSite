import React from 'react';
import {useSelector} from "react-redux";
import createSelector from "../../../admin-helpers/createSelector";
import ArticleMainAbstract from "../ArticleMainAbstract";
import createInputOnChange from "../../../admin-services/InputOnChange/createInputOnChenge";
import createCheckboxToggle from "../../../admin-services/InputOnChange/createCheckboxToggle";

const ArticleMainCreate = () => {
    const {tableItemCreate} = useSelector(createSelector)
    return <ArticleMainAbstract data={tableItemCreate} inputChange={createInputOnChange}
                                checkboxChange={createCheckboxToggle} />
}

export default ArticleMainCreate
