import React from 'react';
import {useSelector} from "react-redux";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";
import ArticleContentAbstract from "../ArticleContentAbstract";
import ArticleMainPhotoUpdateInput from "../ArticleMainPhotoUpdateInput";
import ArticleImagesList from "../ArticleImagesList";
import ArticleUploadImage from "../ArticleUploadImage";

const ArticleContent = () => {
    const {tableItemEdit} = useSelector(editSelector)
    const {files} = tableItemEdit;
    return (
        <div>
            <ArticleUploadImage />
            <ArticleImagesList files={files}/>
            <ArticleMainPhotoUpdateInput />
            <ArticleContentAbstract data={tableItemEdit} inputChange={generalInputOnChange} />
        </div>
    )
}

export default ArticleContent;
