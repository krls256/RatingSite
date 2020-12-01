import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../../FormComponent/Input";
import Textarea from "../../FormComponent/Textarea";
import videoInputOnChange from "../../../admin-services/InputOnChange/videoInputOnChange";

const VideoMain = () => {
    const {videoEdit} = useSelector(selector)
    return (
        <div className="page-wrapper card m-3 p-3 col-8">
            {
                fields.map(({label, field}) => (
                    <Input label={label}
                           field={field}
                           ReduxObj={videoEdit}
                           key={field}
                           onChange={videoInputOnChange(useDispatch)(field, videoEdit)}/>
                ))
            }
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={videoEdit}
                              key={field}
                              onChange={videoInputOnChange(useDispatch)(field, videoEdit)}
                    />
                ))
            }
        </div>
    )
}

const selector = ({videoEdit}) => ({videoEdit})

export default VideoMain;


const fields = [
    {
        field: 'video_title',
        label: 'Название видео',
    },
    {
        field: 'video_link',
        label: 'Ссылка на видео',
    },
    {
        field: 'video_slug',
        label: 'Адресный идентификатор',
    }
]

const textareas = [
    {
        field: 'video_description',
        label: 'Описание видео',
    },
]
