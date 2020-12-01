import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getVideoEdit, resetVideoEdit, updateVideoMain} from "../../../admin-actions/videoEditAction";
import Spinner from "../../GeneralComponents/Spinner";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import PageHider from "../../../admin-hoc/PageHider";
import VideoMain from "../VideosMain";
import SubmitButton from "../../GeneralComponents/SubmitButton";

const VideosEdit = () => {
    const {videoEdit, apiToken} = useSelector(selector);
    const [navPages, setNavPages] = useState(pages)
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(apiToken) {
            dispatch(getVideoEdit(id))
        }
        return () => dispatch(resetVideoEdit())
    }, [apiToken, id]);

    if(videoEdit === null)
        return <Spinner />

    return (
        <form action={`/api/admin/videos/${id}`} method='POST' className='page'>
            <EditNavbar navList={navPages} changeNavList={setNavPages}/>
            <ErrorLine/>
            <SuccessLine/>
            <article className="page__content">
                <PageHider component={VideoMain} active={navPages.active} index={0}/>

                <div className='card m-3 p-3 col-3 offset-3'>
                    <SubmitButton action={updateVideoMain}/>
                </div>
            </article>
        </form>
    )

}

const selector = ({videoEdit, apiToken}) => ({videoEdit, apiToken})

export default VideosEdit

const pages = {
    data: [
        'Главная',
    ],
    active: 0
}
