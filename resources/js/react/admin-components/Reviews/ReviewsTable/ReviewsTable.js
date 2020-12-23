import React from 'react';
import Pagination from "../../GeneralComponents/Pagination";
import Spinner from "../../GeneralComponents/Spinner";
import ReviewItem from "../ReviewItem";
import Table from "../../GeneralComponents/Table";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";

const ReviewsTable = () => {
    const reviewsPage = useUniversalTableData('reviews');
    if (reviewsPage === undefined)
        return <Spinner />
    return (
        <div>
            <Table fields={['ID', 'Никнейм', 'Балл', 'Дата', 'Ссылки']}
                   head_key={'reviews'}
                   key_field={'reviewer_name'}
                   component={ReviewItem} items={reviewsPage} />
            <Pagination />
        </div>
    )
}

export default ReviewsTable;
