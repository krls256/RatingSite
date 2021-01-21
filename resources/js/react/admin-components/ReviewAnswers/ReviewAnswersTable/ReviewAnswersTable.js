import React, {Fragment} from 'react';
import Spinner from "../../GeneralComponents/Spinner";
import Table from "../../GeneralComponents/Table";
import ReviewAnswersItem from "../ReviewAnswersItem";
import Pagination from "../../GeneralComponents/Pagination";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";
import FilterBar from "../../GeneralComponents/FilterBar";

const ReviewAnswersTable = () => {
    const reviewAnswersPage = useUniversalTableData('review-answers');

    const content = reviewAnswersPage === undefined ? <Spinner /> :
        (
            <Fragment>
                <Table fields={['ID', 'Имя', 'Смотреть отзыв', 'Ссылки']}
                       head_key={'review-answers'}
                       key_field={'review_answer_id'}
                       id_key='review_answer_id'
                       component={ReviewAnswersItem} items={reviewAnswersPage} />
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

export default ReviewAnswersTable;

const orderBy = [
    {
        label: 'Сортировка: ID комментария',
        value: 'review_answer_id'
    },
    {
        label: 'Сортировка: Опубликовано ли',
        value: 'review_answer_id'
    },
    {
        label: 'Сортировка: Дата оставления',
        value: 'created_at'
    },
    {
        label: 'Сортировка: ID отзыва',
        value: 'review_id'
    }
];

const filters = [
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
]

