import React, {Fragment} from 'react';
import Spinner from "../../GeneralComponents/Spinner";
import Table from "../../GeneralComponents/Table";
import UserMessagesItem from "../UserMessagesItem";
import Pagination from "../../GeneralComponents/Pagination";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";
import FilterBar from "../../GeneralComponents/FilterBar";

const UserMessagesTable = () => {
    const userMessagesPage = useUniversalTableData('user-messages');

    const content = userMessagesPage === undefined ? <Spinner /> :
        (
            <Fragment>
                <Table fields={['ID', 'Имя', 'e-Mail', 'Прочитано', 'Ссылки']}
                       head_key='user-messages'
                       key_field='message_id'
                       id_key='message_id'
                       component={UserMessagesItem} items={userMessagesPage} />
                <Pagination />
            </Fragment>
        )
    return (
        <section>
            <FilterBar orderBy={orderBy} filters={filters}/>
            {content}
        </section>
    )
}

export default UserMessagesTable

const orderBy = [
    {
        label: 'Сортировка: ID сообщения',
        value: 'message_id'
    },
    {
        label: 'Сортировка: Дата создания',
        value: 'created_at'
    }
];

const filters = [
    {
        field: 'is_checked',
        options: [

            {
                label: 'Без фильтра просмотра',
                value: 'null,null'
            },
            {
                label: 'Просмотрено',
                value: 'equal,1'
            },
            {
                label: 'Не просмотрено',
                value: 'equal,0'
            },
        ]

    }
]
