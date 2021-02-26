import React, {useState} from 'react';
import Spinner from "../../GeneralComponents/Spinner";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import PageHider from "../../../admin-hoc/PageHider";
import ArticleMain from "../ArticleMain";
import ArticleContent from "../ArticleContent";
import ArticleView from "../ArticleView";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import EditWindow from "../../GeneralComponents/EditWindow";
import useUniversalEditData from "../../../admin-hoooks/useUniversalEditData";

const ArticleEdit = () => {
    const [navPages, setNavPages] = useState(pages)
    const {id, tableItemEdit: articleEdit} = useUniversalEditData('articles');
    if (articleEdit === null)
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )

    return (
        <EditWindow>
            <form action={`/api/admin/articles/${id}`} method='POST' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages} />
                <ErrorLine />
                <SuccessLine />
                <article className="page__content">
                    <PageHider active={navPages.active} index={0} component={ArticleMain} />
                    <PageHider active={navPages.active} index={1} component={ArticleContent} />
                    <PageHider active={navPages.active} index={2} component={ArticleView} />

                    <div className='mt-3 page__button'>
                        <SubmitButton tableName='articles'/>
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
        'Просмотр'
    ],
    active: 0
}
