import React from 'react'
import Table from "../../GeneralComponents/Table";
import VideoItem from "../VideoItem";
import Spinner from "../../GeneralComponents/Spinner";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";

const VideosTable = () => {
    const videosPage = useUniversalTableData('videos');

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
