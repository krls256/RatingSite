import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateArticleMain} from "../admin-actions/articlesEditAction";

const ArticleSubmit = () => {
    const {articleEdit} = useSelector(selector);
    const dispatch = useDispatch();
    const onClick = (e) => {
        e.preventDefault();
        dispatch(updateArticleMain())
    }
    return (
        <div className='card m-3 p-3 col-3 offset-3'>
            <button type='submit' onClick={onClick} className='btn b-dark c-white'>Сохранить</button>
        </div>
    )
}

const selector = ({articleEdit}) => ({articleEdit})

export default ArticleSubmit;
