import React, {useState} from 'react';
import Spinner from "../../GeneralComponents/Spinner";
import {
    getReviewAnswerEdit,
    resetReviewAnswerEdit,
    updateReviewAnswerMain
} from '../../../admin-actions/reviewAnswers/reviewAnswerEditActions'
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import PageHider from "../../../admin-hoc/PageHider";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import ReviewAnswerMain from "../ReviewAnswerMain";
import EditWindow from "../../GeneralComponents/EditWindow";
import useEditData from "../../../admin-hoooks/useEditData";

const ReviewAnswerEdit = () => {
    const [navPages, setNavPages] = useState(pages);
    const {id, reviewAnswerEdit} = useEditData('reviewAnswerEdit', getReviewAnswerEdit, resetReviewAnswerEdit);

    if (reviewAnswerEdit === null)
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )

    return (
        <EditWindow>
            <form action={`/api/admin/review-answers/${id}`} method='POST' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages} />
                <ErrorLine />
                <SuccessLine />
                <article className="page__content">
                    <PageHider active={navPages.active} index={0} component={ReviewAnswerMain} />

                    <div className='pt-3 page__button'>
                        <SubmitButton action={updateReviewAnswerMain} />
                    </div>
                </article>
            </form>
        </EditWindow>
    )
}

export default ReviewAnswerEdit;

const pages = {
    data: [
        'Главная'
    ],
    active: 0
}
