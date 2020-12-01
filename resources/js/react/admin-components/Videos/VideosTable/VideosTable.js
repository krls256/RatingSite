import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getVideos} from "../../../admin-actions/videosActions";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import Table from "../../GeneralComponents/Table";
import VideoItem from "../VideoItem";
import Spinner from "../../GeneralComponents/Spinner";

const VideosTable = () => {
    const {videos, currentPage, apiToken} = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (apiToken !== null && videos[currentPage] === undefined) {
            dispatch(getVideos())
        }
    }, [currentPage, apiToken])

    if(videos[currentPage] === undefined) {
        return <Spinner />
    }

    return (
        <div>
            <SuccessLine />
            <ErrorLine />
            <Table component={VideoItem}
                    fields={['ID', 'Название видео', 'Идентификатор видео', 'Изменить']}
                    head_key={'video'}
                    key_field={'video_slug'}
                    items={videos[currentPage]}/>
        </div>
    )
}

const selector = ({videos, currentPage, apiToken}) => ({videos, currentPage, apiToken});

export default VideosTable;
