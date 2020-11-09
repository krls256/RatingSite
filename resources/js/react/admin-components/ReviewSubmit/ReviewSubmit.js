import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateReviewMain} from '../../admin-actions/reviewsEditActions'

const ReviewSubmit = ({id}) => {
    const {csrfToken} = useSelector(selector);
    const dispatch = useDispatch()
    const onClick = (e) => {
        e.preventDefault();
        dispatch(updateReviewMain(id))
    }
    return (
        <div className='card m-3 p-3 col-3 offset-3'>
            <input type="hidden" name='_method' value='PATCH'/>
            <input type="hidden" name='_token' value={csrfToken}/>
            <button type='submit' onClick={onClick} className='btn b-dark c-white'>Сохранить</button>
        </div>
    )
}

export default ReviewSubmit;

const selector = ({csrfToken}) => ({csrfToken})
