import React, {Fragment} from 'react'
import Table from "../../GeneralComponents/Table";
import VideoItem from "../VideoItem";
import Spinner from "../../GeneralComponents/Spinner";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";
import Pagination from "../../GeneralComponents/Pagination/Pagination";
import FilterBar from "../../GeneralComponents/FilterBar";

const VideosTable = () => {
    const videosPage = useUniversalTableData('videos');

    const content = videosPage === undefined ? <Spinner /> :
        (
            <Fragment>
                <Table component={VideoItem}
                       fields={['ID', 'Название видео', 'Идентификатор видео', 'Изменить']}
                       head_key={'video'}
                       key_field={'video_slug'}
                       id_key='video_id'
                       items={videosPage} />
                <Pagination />
            </Fragment>
        )

    return (
        <section>
            <FilterBar orderBy={orderBy} filters={filters} createButton/>
            {content}
        </section>
    )
}

export default VideosTable;

const orderBy = [
    {
        label: 'Сортировка: ID видео',
        value: 'video_id'
    },
    {
        label: 'Сортировка: Дата добавления',
        value: 'created_at'
    }
];

const filters = [
    {
        field: 'is_published',
        options: [

            {
                label: 'Без фильтра публикации',
                value: 'null,null'
            },
            {
                label: 'Опубликовано',
                value: 'equal,1'
            },
            {
                label: 'Не опубликовано',
                value: 'equal,0'
            },
        ]

    }
]
