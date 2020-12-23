import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../../FormComponent/Input";
import Textarea from "../../FormComponent/Textarea";
import generalInputOnChange from "../../../admin-services/InputOnChange/generalInputOnChenge";
import editSelector from "../../../admin-helpers/editSelector";

const VideoMain = () => {
    const {tableItemEdit: videoEdit} = useSelector(editSelector)
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({label, field}) => (
                    <Input label={label}
                           field={field}
                           ReduxObj={videoEdit}
                           key={field}
                           onChange={generalInputOnChange(useDispatch)(field, videoEdit)} />
                ))
            }
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={videoEdit}
                              key={field}
                              onChange={generalInputOnChange(useDispatch)(field, videoEdit)}
                    />
                ))
            }
        </div>
    )
}

export default VideoMain;


const fields = [
    {
        field: 'video_title',
        label: 'Название видео',
    },
    {
        field: 'video_ytid',
        label: 'YouTube Id',
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
