import React from 'react';
import Spinner from "../../GeneralComponents/Spinner";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import Table from "../../GeneralComponents/Table";
import UserMessagesItem from "../UserMessagesItem";
import Pagination from "../../GeneralComponents/Pagination";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";

const UserMessagesTable = () => {
    const userMessagesPage = useUniversalTableData('user-messages');

    if (userMessagesPage === undefined)
        return <Spinner />

    return (
        <div>
            <ErrorLine />
            <Table fields={['ID', 'Имя', 'e-Mail', 'Прочитано', 'Ссылки']}
                   head_key={'user-messages'}
                   key_field={'message_id'}
                   component={UserMessagesItem} items={userMessagesPage} />
            <Pagination />
        </div>
    )
}

export default UserMessagesTable
