import React, {useState} from 'react';
import Spinner from "../../GeneralComponents/Spinner";
import EditWindow from "../../GeneralComponents/EditWindow";
import useUniversalCreateData from "../../../admin-hoooks/useUniversalCreateData";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import PageHider from "../../../admin-hoc/PageHider";
import VideosMainCreate from "../VideosMainCreate";
import SubmitCreateButton from "../../GeneralComponents/SubmitCreateButton";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import {Redirect} from "react-router-dom";


const VideosCreate = () => {
    const [navPages, setNavPages] = useState(pages);
    const {tableItemCreate, redirect} = useUniversalCreateData('videos');

    if (redirect) {
        return <Redirect to={`/admin/videos/${redirect}/edit`} />
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
                    <PageHider component={VideosMainCreate} active={navPages.active} index={0} />

                    <div className='mt-3 page__button'>
                        <SubmitCreateButton tableName={'videos'} />
                    </div>
                </article>
            </form>
        </EditWindow>
    )
}

export default VideosCreate;

const pages = {
    data: [
        'Главная',
    ],
    active: 0
};
