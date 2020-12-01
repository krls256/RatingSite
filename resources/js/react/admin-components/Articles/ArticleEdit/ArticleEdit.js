import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom';
import {getArticleEdit, resetArticleEdit, updateArticleMain} from "../../../admin-actions/articlesEditAction";
import Spinner from "../../GeneralComponents/Spinner";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import PageHider from "../../../admin-hoc/PageHider";
import ArticleMain from "../ArticleMain";
import ArticleContent from "../ArticleContent";
import SubmitButton from "../../GeneralComponents/SubmitButton";

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

                <div className='card m-3 p-3 col-3 offset-3'>
                    <SubmitButton action={updateArticleMain}/>
                </div>
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
