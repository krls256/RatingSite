import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../admin-actions/articlesActions";
import Spinner from "../Spinner";
import ErrorLine from "../ErrorLine/ErrorLine";

import Pagination from "../Pagination";
import SuccessLine from "../SuccessLine/SuccessLine";
import ArticleItem from "../ArticleItem";
import Table from "../Table";

const ArticlesTable = () => {
    const {apiToken, currentPage, articles} = useSelector(selector);
    const dispatch = useDispatch()

    useEffect(() => {
        if (apiToken !== null && articles[currentPage] === undefined)
            dispatch(getArticles())
    }, [apiToken, currentPage])


    if (articles[currentPage] === undefined) {
        return <Spinner />
    }

    return (
        <section>
            <SuccessLine />
            <ErrorLine />
            <Table component={ArticleItem}
                   fields={['ID', 'Название', 'Идентификатор', 'Ссылки']}
                   head_key={'article'}
                   key_field={'article_slug'}
                   items={articles[currentPage]} />
            <Pagination />
        </section>
    )
}

const selector = ({apiToken, currentPage, articles}) => ({apiToken, currentPage, articles})

export default ArticlesTable;
