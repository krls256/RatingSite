import React from 'react';
import {Link} from "react-router-dom";

const VideoItem = ({data}) => {
    const {video_id, video_title, video_slug} = data
    return (
        <tr className='c-dark'>
            <th scope="row">{video_id}</th>
            <td>{video_title}</td>
            <td>{video_slug}</td>
            <td>
                <Link to={`/admin/videos/${video_id}/edit`} className='table-list table-list_companies h-silver'>
                    Изменить
                </Link>
            </td>
        </tr>
    )
}

export default VideoItem
