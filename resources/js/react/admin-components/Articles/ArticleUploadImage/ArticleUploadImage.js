import React, {useState} from 'react';
import {onImageUpload} from "./articlesUpdateImageFunctions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

const ArticleUploadImage = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const {apiToken} = useSelector(selector)
    const dispatch = useDispatch();
    const {id} = useParams();
    const onUpload = onImageUpload.bind(null, setErrorMessage, {apiToken, id}, dispatch);

    return (
        <div className="custom-file">
            <input type="file"
                   accept=".png, .jpg, .jpeg"
                   className="custom-file-input"
                   id="upload-article-file"
                   name="upload-article-file"
                   onChange={onUpload} />
            <label className="btn b-dark c-white"
                   htmlFor="upload-article-file">Загрузить картинку +</label>
            {   errorMessage ? (<div className="text-danger">{errorMessage}</div>) : null   }
        </div>
    )
}

const selector = ({apiToken}) => ({apiToken});

export default ArticleUploadImage
