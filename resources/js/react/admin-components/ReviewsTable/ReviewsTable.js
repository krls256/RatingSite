import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "../../admin-actions/reviewsActions";
import ErrorLine from "../ErrorLine/ErrorLine";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
import ReviewItem from "../ReviewItem";
import Table from "../Table";

const ReviewsTable = () => {
    const {currentPage, apiToken, reviews} = useSelector(selectProps);
    const dispatch = useDispatch();

    useEffect(() => {
        if (apiToken !== null && reviews[currentPage] === undefined) {
            dispatch(getReviews())
        }
    }, [apiToken, currentPage])
    if (reviews[currentPage] === undefined)
        return <Spinner />
    return (
        <div>
            <ErrorLine />
            <Table fields={['ID', 'Никнейм', 'Балл', 'Дата', 'Ссылки']}
                   head_key={'reviews'}
                   key_field={'reviewer_name'}
                   component={ReviewItem} items={reviews[currentPage]}/>
            <Pagination />
        </div>
    )
}

const selectProps = ({currentPage, apiToken, reviews}) => ({currentPage, apiToken, reviews});

export default ReviewsTable;
