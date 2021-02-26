import React from 'react';
import {useSelector} from "react-redux";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";
import ArticleContentAbstract from "../ArticleContentAbstract";

const ArticleContent = () => {
    const {tableItemEdit} = useSelector(editSelector)
    const {files} = tableItemEdit;

    return (
        <div>
            <ul className='list-group pt-3'>
                {
                    files.map(fileName => (
                        <li className='list-group-item d-flex justify-content-between align-items-center' key={fileName}>
                            <b>{fileName}</b>
                            <span className="badge badge-pill badge-dark" type='button'>Удалить</span>
                        </li>
                    ))
                }
            </ul>

            <ArticleContentAbstract data={tableItemEdit} inputChange={generalInputOnChange} />
        </div>
    )
}

export default ArticleContent;
