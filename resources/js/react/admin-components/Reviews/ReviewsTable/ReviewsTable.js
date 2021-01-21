import React, {Fragment} from 'react';
import Pagination from "../../GeneralComponents/Pagination";
import Spinner from "../../GeneralComponents/Spinner";
import ReviewItem from "../ReviewItem";
import Table from "../../GeneralComponents/Table";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";
import FilterBar from "../../GeneralComponents/FilterBar";

const ReviewsTable = () => {
    const reviewsPage = useUniversalTableData('reviews');
    const content = reviewsPage === undefined ? <Spinner/> :
        (
            <Fragment>
                <Table fields={['ID', 'Никнейм', 'Балл', 'Дата', 'Ссылки']}
                       head_key={'reviews'}
                       key_field={'reviewer_name'}
                       id_key={'review_id'}
                       component={ReviewItem} items={reviewsPage} />
                <Pagination />
            </Fragment>
        )
    return (
        <section>
            <FilterBar orderBy={orderBy} filters={filters}/>
            {content}
        </section>
    )
}

export default ReviewsTable;

const orderBy = [
    {
        label: 'Сортировка: ID отзыва',
        value: 'review_id'
    },
    {
        label: 'Сортировка: Дата',
        value: 'review_date'
    }
];

const filters = [
    {
        field: 'review_mark',
        options: [

            {
                label: 'Без фильтра балла',
                value: 'null,null'
            },
            {
                label: 'Позитивные',
                value: 'more,3'
            },
            {
                label: 'Негативные',
                value: 'less-equal,3'
            }
        ]

    },
    {
        field: 'is_published',
        options: [

            {
                label: 'Без фильтра публикации',
                value: 'null,null'
            },
            {
                label: 'Опубликовано',
                value: 'equal,1'
            },
            {
                label: 'Не опубликовано',
                value: 'equal,0'
            },
        ]

    }
];
