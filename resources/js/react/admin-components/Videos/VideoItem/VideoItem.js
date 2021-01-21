import React from 'react';
import {Link} from "react-router-dom";

const VideoItem = ({data}) => {
    const {video_id, video_title, video_slug, is_published} = data;
    const classList = is_published ? 'c-dark' : 'c-dark table-list__item_unpublished';
    return (
        <tr className={classList}>
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
