import React from 'react';
import Input from "../../FormComponent/Input";
import {useDispatch} from "react-redux";
import Textarea from "../../FormComponent/Textarea";
import Checkbox from "../../FormComponent/Checkbox/Checkbox";

const VideoMainAbstract = ({data, inputChange, checkboxChange}) => {
    return (
        <div className="page-wrapper card mt-3 p-3">
            {
                fields.map(({label, field}) => (
                    <Input label={label}
                           field={field}
                           ReduxObj={data}
                           key={field}
                           onChange={inputChange(useDispatch)(field, data)} />
                ))
            }
            {
                textareas.map(({label, field}) => (
                    <Textarea label={label}
                              field={field}
                              ReduxObj={data}
                              key={field}
                              onChange={inputChange(useDispatch)(field, data)}
                    />
                ))
            }
            <Checkbox value={data.is_published}
                      label={'Опубликовано'}
                      onChange={checkboxChange(useDispatch)(data)} />
        </div>
    )
}

export default VideoMainAbstract;

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
