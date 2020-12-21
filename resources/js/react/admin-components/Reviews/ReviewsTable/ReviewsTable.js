import React from 'react';
import {getReviews} from "../../../admin-actions/reviews/reviewsActions";
import Pagination from "../../GeneralComponents/Pagination";
import Spinner from "../../GeneralComponents/Spinner";
import ReviewItem from "../ReviewItem";
import Table from "../../GeneralComponents/Table";
import useTableData from "../../../admin-hoooks/useTableData";

const ReviewsTable = () => {
    const reviewsPage = useTableData('reviews', getReviews);
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
