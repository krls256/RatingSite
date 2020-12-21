import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import {resetReviewEdit, getReviewEdit, updateReviewMain} from '../../../admin-actions/reviews/reviewsEditActions'
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import PageHider from "../../../admin-hoc/PageHider";
import ReviewMain from "../ReviewMain";
import ReviewText from "../ReviewText/ReviewText";
import Spinner from "../../GeneralComponents/Spinner";
import ReviewImmutable from "../ReviewImmutable";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import EditWindow from "../../GeneralComponents/EditWindow";
import useEditData from "../../../admin-hoooks/useEditData";

const ReviewEdit = () => {
    const [navPages, setNavPages] = useState(pages)
    const {id, reviewEdit} = useEditData('reviewEdit', getReviewEdit, resetReviewEdit);

    if(reviewEdit === null) {
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )
    }
    return (
        <EditWindow>
            <form action={`/api/admin/reviews/${id}`} method='post' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages}/>
                <ErrorLine/>
                <SuccessLine/>
                <article className="page__content">
                    <PageHider active={navPages.active} index={0} component={ReviewMain}/>
                    <PageHider active={navPages.active} index={1} component={ReviewText}/>
                    <PageHider active={navPages.active} index={2} component={ReviewImmutable}/>

                    <div className='pt-3 page__button'>
                        <SubmitButton action={updateReviewMain} />
                    </div>
                </article>
            </form>
        </EditWindow>
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
