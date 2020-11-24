import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom';
import {getArticleEdit, resetArticleEdit} from "../../admin-actions/articlesEditAction";
import Spinner from "../Spinner";
import EditNavbar from "../EditNavbar";
import ErrorLine from "../ErrorLine/ErrorLine";
import SuccessLine from "../SuccessLine/SuccessLine";
import PageHider from "../../admin-hoc/PageHider";
import ArticleMain from "../ArticleMain";
import ArticleContent from "../ArticleContent";
import ArticleSubmit from "../ArticleSubmit";

const ArticleEdit = () => {
    const {articleEdit, apiToken} = useSelector(selector);
    const [navPages, setNavPages] = useState(pages)
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(apiToken) {
            dispatch(getArticleEdit(id))
        }
        return () => dispatch(resetArticleEdit())
    }, [apiToken, id]);


    if(articleEdit === null)
        return <Spinner />

    return (
        <form action={`/api/admin/articles/${id}`} method='POST' className='page'>
            <EditNavbar navList={navPages} changeNavList={setNavPages}/>
            <ErrorLine/>
            <SuccessLine/>
            <article className="page__content">
                <PageHider active={navPages.active} index={0} component={ArticleMain}/>
                <PageHider active={navPages.active} index={1} component={ArticleContent}/>
                <ArticleSubmit />
            </article>
        </form>
    )
}

const selector = ({articleEdit, apiToken}) => ({articleEdit, apiToken});

export default ArticleEdit;

const pages = {
    data: [
        'Главная',
        'Контент',
    ],
    active: 0
}
