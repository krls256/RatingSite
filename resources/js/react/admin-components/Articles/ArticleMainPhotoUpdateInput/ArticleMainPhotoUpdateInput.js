import React, {useEffect, useState} from 'react';
import {onMainImageChange, onSubmitSuggestion, handleFileInput} from "./updateMainImageFunctions";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

const ArticleMainPhotoUpdateInput = () => {
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [suggestToUpdate, setSuggestToUpdate] = useState(false);

    useEffect(() => {
        handleFileInput(file, setErrorMessage, setSuggestToUpdate)
    }, [file])

    const suggestion = suggestToUpdate ? <Suggestion file={file} setFile={setFile}/> : null;
    return (
        <div className="custom-file">
            <input type="file"
                   accept=".png, .jpg, .jpeg"
                   className="custom-file-input"
                   id="customFile"
                   onChange={onMainImageChange(setFile)} />
            <label className="custom-file-label"
                   htmlFor="customFile">{file?.name || 'Заменить картинку на обложне'}</label>
            {   errorMessage ? (<div className="text-danger">{errorMessage}</div>) : null   }
            {   suggestion   }
        </div>
    )
}

export default ArticleMainPhotoUpdateInput;

const Suggestion = ({file, setFile}) => {
    const afterSuccess = () => {
        setFile(null)
    }
    const dispatch = useDispatch();
    const {apiToken} = useSelector(suggestionSelector)
    const {id} = useParams();
    return (
        <div className="pt-2 d-flex align-items-center">
            <h4 className="mb-0 mr-3">Обновить картинку?</h4>
            <button className="btn b-dark c-white"
                    onClick={onSubmitSuggestion.bind(null, dispatch, {apiToken, id, file, afterSuccess})}>Да</button>
        </div>
    )
}

const suggestionSelector = ({apiToken}) => ({apiToken})



