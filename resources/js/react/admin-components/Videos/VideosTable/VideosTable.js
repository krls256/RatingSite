import React from 'react'
import {getVideos} from "../../../admin-actions/videos/videosActions";
import Table from "../../GeneralComponents/Table";
import VideoItem from "../VideoItem";
import Spinner from "../../GeneralComponents/Spinner";
import useTableData from "../../../admin-hoooks/useTableData";

const VideosTable = () => {
    const videosPage = useTableData('videos', getVideos);

    if (videosPage === undefined) {
        return <Spinner />
    }

    return (
        <div>
            <Table component={VideoItem}
                   fields={['ID', 'Название видео', 'Идентификатор видео', 'Изменить']}
                   head_key={'video'}
                   key_field={'video_slug'}
                   items={videosPage} />
        </div>
    )
}

export default VideosTable;
