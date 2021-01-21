import React, {Fragment} from 'react'
import Spinner from "../../GeneralComponents/Spinner";

import Pagination from "../../GeneralComponents/Pagination";
import ArticleItem from "../ArticleItem";
import Table from "../../GeneralComponents/Table";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";
import FilterBar from "../../GeneralComponents/FilterBar";

const ArticlesTable = () => {
    const articlePage = useUniversalTableData('articles');

    const content = articlePage === undefined ? <Spinner /> :
        (
            <Fragment>
                <Table component={ArticleItem}
                       fields={['ID', 'Название', 'Идентификатор', 'Ссылки']}
                       head_key={'article'}
                       key_field={'article_slug'}
                       id_key='article_id'
                       items={articlePage} />
                <Pagination />
            </Fragment>
        );

    return (
        <section>
            <FilterBar orderBy={orderBy} filters={filters} createButton/>
            {content}
        </section>
    )
}

export default ArticlesTable;

const orderBy = [
    {
        label: 'Сортировка: ID статьи',
        value: 'article_id'
    },
    {
        label: 'Сортировка: Дата создания',
        value: 'created_at'
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
