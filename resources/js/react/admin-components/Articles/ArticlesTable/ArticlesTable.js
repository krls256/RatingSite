import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "../../../admin-actions/articlesActions";
import Spinner from "../../GeneralComponents/Spinner";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";

import Pagination from "../../GeneralComponents/Pagination";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import ArticleItem from "../ArticleItem";
import Table from "../../GeneralComponents/Table";

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
