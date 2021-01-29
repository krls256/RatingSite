import React, {useState} from 'react';
import useUniversalCreateData from "../../../admin-hoooks/useUniversalCreateData";
import {Redirect} from "react-router-dom";
import EditWindow from "../../GeneralComponents/EditWindow";
import Spinner from "../../GeneralComponents/Spinner";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SubmitCreateButton from "../../GeneralComponents/SubmitCreateButton";
import PageHider from "../../../admin-hoc/PageHider";
import ArticleMainCreate from "../ArticleMainCreate";
import ArticleContentCreate from "../ArticleContentCreate";
import ArticleFilesCreate from "../ArticleFilesCreate";

const ArticlesCreate = () => {
    const tableName = 'articles';
    const [navPages, setNavPages] = useState(pages);
    const {tableItemCreate, redirect} = useUniversalCreateData(tableName);

    if (redirect) {
        return <Redirect to={`/admin/${tableName}/${redirect}/edit`} />
    }

    if (tableItemCreate === null) {
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )
    }


    return (
        <EditWindow>
            <form action={`/api/admin/videos/create`} method='POST' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages} />
                <ErrorLine />

                <article className="page__content">
                    <PageHider active={navPages.active} index={0} component={ArticleMainCreate}/>
                    <PageHider active={navPages.active} index={1} component={ArticleContentCreate}/>
                    <PageHider active={navPages.active} index={2} component={ArticleFilesCreate} />

                    <div className='mt-3 page__button'>
                        <SubmitCreateButton tableName={tableName} />
                    </div>
                </article>
            </form>
        </EditWindow>
    )
}

export default ArticlesCreate;


const pages = {
    data: [
        'Главная',
        'Контент',
        'Файлы'
    ],
    active: 0
}
