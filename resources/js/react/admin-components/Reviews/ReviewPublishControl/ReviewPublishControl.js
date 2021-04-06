import React from 'react';
import PublishingEditContext from '../ReviewsContexts/PublishingEditContext';
import WithContext from '../../../admin-hoc/WithContext';
import {useDispatch} from "react-redux";
import {cancelPagesEditing, startPagesEditing} from "../../../admin-actions/table/tablePagesEditingActions";
import {setReviewsPublishing} from "../../../admin-actions/apiActions/reviewsGeneralApiActions";


const ReviewPublishControl = ({isPublishingEdit, toggleIsPublishingEdit}) => {
    const dispatch = useDispatch();
    const startEditing = () => {
        toggleIsPublishingEdit();
        dispatch(startPagesEditing())
    }
    const cancelEditing = () => {
        toggleIsPublishingEdit();
        dispatch(cancelPagesEditing())
    }

    const commitEditing = () => {
        toggleIsPublishingEdit();
        dispatch(setReviewsPublishing());
    }
    if(!isPublishingEdit) {
        return (
            <button className='btn b-dark c-white filter-bar__button' onClick={startEditing}>
                Изменить публикацию
            </button>
        )
    }
    return (
        <div>
            <button className='btn b-dark c-white filter-bar__button' onClick={commitEditing}>
                Сохранить
            </button>
            <button className='btn b-dark c-white filter-bar__button ml-2' onClick={cancelEditing}>
                Сбросить
            </button>
        </div>
    )
}

export default WithContext(PublishingEditContext)(ReviewPublishControl);
