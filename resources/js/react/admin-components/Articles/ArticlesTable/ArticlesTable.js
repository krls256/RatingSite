import React from 'react'
import {getArticles} from "../../../admin-actions/articles/articlesActions";
import Spinner from "../../GeneralComponents/Spinner";

import Pagination from "../../GeneralComponents/Pagination";
import ArticleItem from "../ArticleItem";
import Table from "../../GeneralComponents/Table";
import useTableData from "../../../admin-hoooks/useTableData";

const ArticlesTable = () => {
    const articlePage = useTableData('articles', getArticles);

    if (articlePage === undefined) {
        return <Spinner />
    }

    return (
        <section>
            <Table component={ArticleItem}
                   fields={['ID', 'Название', 'Идентификатор', 'Ссылки']}
                   head_key={'article'}
                   key_field={'article_slug'}
                   items={articlePage} />
            <Pagination />
        </section>
    )
}

export default ArticlesTable;
