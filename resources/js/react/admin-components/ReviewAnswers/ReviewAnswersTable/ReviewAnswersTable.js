import React from 'react';
import Spinner from "../../GeneralComponents/Spinner";
import Table from "../../GeneralComponents/Table";
import ReviewAnswersItem from "../ReviewAnswersItem";
import Pagination from "../../GeneralComponents/Pagination";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";

const ReviewAnswersTable = () => {
    const reviewAnswersPage = useUniversalTableData('review-answers');
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
