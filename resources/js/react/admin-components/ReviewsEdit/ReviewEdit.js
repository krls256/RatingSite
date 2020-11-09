import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import {resetReviewEdit, getReviewEdit} from '../../admin-actions/reviewsEditActions'
import EditNavbar from "../EditNavbar";
import ErrorLine from "../ErrorLine/ErrorLine";
import SuccessLine from "../SuccessLine/SuccessLine";
import PageHider from "../../admin-hoc/PageHider";
import ReviewMain from "../ReviewMain";
import ReviewText from "../ReviewText/ReviewText";
import Spinner from "../Spinner";
import ReviewImmutable from "../ReviewImmutable";
import ReviewSubmit from "../ReviewSubmit";

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
                <ReviewSubmit id={id}/>
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
