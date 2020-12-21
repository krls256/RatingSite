import React from 'react';
import {Link} from "react-router-dom";

const UserMessagesItem = ({data}) => {
    const {message_id, user_name, user_email, user_message, is_send, is_checked} = data;
    const read = is_checked ? '/img/admin/checked.svg' : '/img/admin/warning.svg'
    return (
        <tr className='c-dark'>
            <th scope="row" >{message_id}</th>
            <td>{user_name}</td>
            <td >{user_email}</td>
            <td>
                <img src={read} alt="Состояние прочитаности" className='h-25 d-block'/>
            </td>
            <td>
                <Link to={`/admin/user-messages/${message_id}/edit`} className='table-list table-list_companies h-silver'>
                    Читать/Изменить
                </Link>
            </td>
        </tr>
    )
}

export default UserMessagesItem;
