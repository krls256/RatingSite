import React, {useState} from 'react';
import {getArticleEdit, resetArticleEdit, updateArticleMain} from "../../../admin-actions/articles/articlesEditAction";
import Spinner from "../../GeneralComponents/Spinner";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import PageHider from "../../../admin-hoc/PageHider";
import ArticleMain from "../ArticleMain";
import ArticleContent from "../ArticleContent";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import EditWindow from "../../GeneralComponents/EditWindow";
import useEditData from "../../../admin-hoooks/useEditData";

const ArticleEdit = () => {
    const [navPages, setNavPages] = useState(pages)
    const {id, articleEdit} = useEditData('articleEdit', getArticleEdit, resetArticleEdit);

    if (articleEdit === null)
        return <Spinner />

    return (
        <EditWindow>
            <form action={`/api/admin/articles/${id}`} method='POST' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages} />
                <ErrorLine />
                <SuccessLine />
                <article className="page__content">
                    <PageHider active={navPages.active} index={0} component={ArticleMain} />
                    <PageHider active={navPages.active} index={1} component={ArticleContent} />

                    <div className='mt-3 page__button'>
                        <SubmitButton action={updateArticleMain} />
                    </div>
                </article>
            </form>
        </EditWindow>
    )
}

export default ArticleEdit;

const pages = {
    data: [
        'Главная',
        'Контент',
    ],
    active: 0
}
