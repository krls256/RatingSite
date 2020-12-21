import React from 'react';
import Spinner from "../../GeneralComponents/Spinner";
import {getReviewAnswers} from "../../../admin-actions/reviewAnswers/reviewAnswersAntions";
import Table from "../../GeneralComponents/Table";
import ReviewAnswersItem from "../ReviewAnswersItem";
import Pagination from "../../GeneralComponents/Pagination";
import useTableData from "../../../admin-hoooks/useTableData";

const ReviewAnswersTable = () => {
    const reviewAnswersPage = useTableData('reviewAnswers', getReviewAnswers);
    if (reviewAnswersPage === undefined)
        return <Spinner />

    return (
        <div>
            <Table fields={['ID', 'Имя', 'Смотреть отзыв', 'Ссылки']}
                   head_key={'review-answers'}
                   key_field={'review_answer_id'}
                   component={ReviewAnswersItem} items={reviewAnswersPage} />
            <Pagination />
        </div>
    )
}

export default ReviewAnswersTable;
