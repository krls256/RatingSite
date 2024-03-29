import React, {useState} from 'react';
import Spinner from "../../GeneralComponents/Spinner";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import PageHider from "../../../admin-hoc/PageHider";
import VideoMain from "../VideosMain";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import EditWindow from "../../GeneralComponents/EditWindow";
import useUniversalEditData from "../../../admin-hoooks/useUniversalEditData";

const VideosEdit = () => {
    const [navPages, setNavPages] = useState(pages)
    const {id, tableItemEdit: videoEdit} = useUniversalEditData('videos');

    if (videoEdit === null)
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )

    return (
        <EditWindow>
            <form action={`/api/admin/videos/${id}`} method='POST' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages} />
                <ErrorLine />
                <SuccessLine />
                <article className="page__content">
                    <PageHider component={VideoMain} active={navPages.active} index={0} />

                    <div className='mt-3 page__button'>
                        <SubmitButton tableName='videos' />
                    </div>
                </article>
            </form>
        </EditWindow>
    )

}

export default VideosEdit;

const pages = {
    data: [
        'Главная',
    ],
    active: 0
};
