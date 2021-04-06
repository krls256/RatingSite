import React, {Fragment, useState} from 'react';
import Pagination from "../../GeneralComponents/Pagination";
import Spinner from "../../GeneralComponents/Spinner";
import ReviewItem from "../ReviewItem";
import Table from "../../GeneralComponents/Table";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";
import FilterBar from "../../GeneralComponents/FilterBar";
import ReviewPublishControl from "../ReviewPublishControl";
import PublishingEditContext from '../ReviewsContexts/PublishingEditContext';
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";

const ReviewsTable = () => {
    const reviewsPage = useUniversalTableData('reviews');
    const [isPublishingEdit, setIsPublishingEdit] = useState(false);
    const toggleIsPublishingEdit = () => setIsPublishingEdit(!isPublishingEdit);
    const tableColumns = ['ID', 'Никнейм', 'Балл', 'Дата', 'Ссылки'];
    if(isPublishingEdit)
        tableColumns.push('Публикация')
    const content = reviewsPage === undefined ? <Spinner/> :
        (
            <Fragment>
                <Table fields={tableColumns}
                       head_key={'reviews'}
                       key_field={'reviewer_name'}
                       id_key={'review_id'}
                       component={ReviewItem} items={reviewsPage} />
                <Pagination />
            </Fragment>
        )
    return (
        <section>
            <PublishingEditContext.Provider value={{isPublishingEdit, toggleIsPublishingEdit}}>
                <FilterBar orderBy={orderBy} filters={filters} additionalComponent={<ReviewPublishControl/>}/>
                <ErrorLine />
                <SuccessLine />
                {content}
            </PublishingEditContext.Provider>
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
