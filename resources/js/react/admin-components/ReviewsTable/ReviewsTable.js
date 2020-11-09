import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getReviews} from "../../admin-actions/reviewsActions";
import ErrorLine from "../ErrorLine/ErrorLine";
import Pagination from "../Pagination";
import Spinner from "../Spinner";
import ReviewItem from "../ReviewItem";

const ReviewsTable = () => {
    const {currentPage, apiToken, reviews} = useSelector(selectProps);
    const dispatch = useDispatch();

    useEffect(() => {
        if(apiToken !== null && reviews[currentPage] === undefined) {
            dispatch(getReviews(currentPage))
        }
    }, [apiToken, currentPage])
    if(reviews[currentPage] === undefined)
        return <Spinner />
    return (
        <div>
            <ErrorLine />
            <table className="table table-list_companies">
                <thead>
                <tr className='c-dark'>
                    <th scope="col">ID</th>
                    <th scope="col">Никнейм</th>
                    <th scope="col">Балл</th>
                    <th scope="col">Дата</th>
                    <th scope="col">Ссылки</th>
                </tr>
                </thead>
                <tbody>
                {
                    reviews[currentPage].map(({review_id, reviewer_name, review_date, review_mark, is_published}) => {
                        return (
                            <ReviewItem id={review_id}
                                        name={reviewer_name}
                                        date={review_date}
                                        mark={review_mark}
                                        key={`${reviewer_name}${review_date}`}
                                        isPublished={is_published}/>
                        )
                    })
                }
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

const selectProps = ({currentPage, apiToken, reviews}) => ({currentPage, apiToken, reviews});

export default ReviewsTable;
