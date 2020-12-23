import React from 'react'
import Spinner from "../../GeneralComponents/Spinner";

import Pagination from "../../GeneralComponents/Pagination";
import ArticleItem from "../ArticleItem";
import Table from "../../GeneralComponents/Table";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";

const ArticlesTable = () => {
    const articlePage = useUniversalTableData('articles');

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
