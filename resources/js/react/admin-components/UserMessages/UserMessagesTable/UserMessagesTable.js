import React from 'react';
import {getUserMessages} from "../../../admin-actions/userMessages/userMessagesActions";
import Spinner from "../../GeneralComponents/Spinner";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import Table from "../../GeneralComponents/Table";
import UserMessagesItem from "../UserMessagesItem";
import Pagination from "../../GeneralComponents/Pagination";
import useTableData from "../../../admin-hoooks/useTableData";

const UserMessagesTable = () => {
    const userMessagesPage = useTableData('userMessages', getUserMessages);

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
