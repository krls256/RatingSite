import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useParams} from 'react-router-dom'
import EditWindow from "../../GeneralComponents/EditWindow";
import Spinner from "../../GeneralComponents/Spinner";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import {
    getUserMessageEdit,
    resetUserMessagesEdit,
    updateUserMessagesMain
} from "../../../admin-actions/userMessages/userMessageEditActions";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import PageHider from "../../../admin-hoc/PageHider";
import UserMessagesMain from "../UserMessagesMain";
import useEditData from "../../../admin-hoooks/useEditData";

const UserMessagesEdit = () => {
    const [navPages, setNavPages] = useState(pages);
    const {id, userMessageEdit} = useEditData('userMessageEdit', getUserMessageEdit, resetUserMessagesEdit);

    if(userMessageEdit === null)
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )

    return (
        <EditWindow>
            <form action={`/api/admin/user-messages/${id}`} method='POST' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages}/>
                <ErrorLine/>
                <SuccessLine/>
                <article className="page__content">
                    <PageHider active={navPages.active} index={0} component={UserMessagesMain}/>
                    <div className='pt-3 page__button'>
                        <SubmitButton action={updateUserMessagesMain}/>
                    </div>
                </article>
            </form>
        </EditWindow>
    )
}
export default UserMessagesEdit;

const pages = {
    data: [
        'Главная'
    ],
    active: 0
}
