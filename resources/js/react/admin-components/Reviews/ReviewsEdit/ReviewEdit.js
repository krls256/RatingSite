import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import {resetReviewEdit, getReviewEdit, updateReviewMain} from '../../../admin-actions/reviewsEditActions'
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import PageHider from "../../../admin-hoc/PageHider";
import ReviewMain from "../ReviewMain";
import ReviewText from "../ReviewText/ReviewText";
import Spinner from "../../GeneralComponents/Spinner";
import ReviewImmutable from "../ReviewImmutable";
import SubmitButton from "../../GeneralComponents/SubmitButton";

const ReviewEdit = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {apiToken, reviewEdit} = useSelector(selector)

    const [navPages, setNavPages] = useState(pages)

    useEffect(() => {
        if(apiToken) {
            dispatch(getReviewEdit(id))
        }
        return () => dispatch(resetReviewEdit())
    }, [id, apiToken])
    if(reviewEdit === null) {
        return <Spinner />
    }
    return (
        <form action={`/api/admin/companies/${id}`} method='post' className='page'>
            <EditNavbar navList={navPages} changeNavList={setNavPages}/>
            <ErrorLine/>
            <SuccessLine/>
            <article className="page__content">
                <PageHider active={navPages.active} index={0} component={ReviewMain}/>
                <PageHider active={navPages.active} index={1} component={ReviewText}/>
                <PageHider active={navPages.active} index={2} component={ReviewImmutable}/>

                <div className='card m-3 p-3 col-3 offset-3'>
                    <SubmitButton action={updateReviewMain} />
                </div>
            </article>
        </form>
    )
}

const selector = ({apiToken, reviewEdit}) => ({apiToken, reviewEdit})

export default ReviewEdit


const pages = {
    data: [
        'Главная',
        'Текст',
        'Неизменяемые данные'
    ],
    active: 0
}
