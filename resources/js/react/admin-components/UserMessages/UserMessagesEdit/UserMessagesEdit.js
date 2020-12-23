import React, {useState} from 'react';
import EditWindow from "../../GeneralComponents/EditWindow";
import Spinner from "../../GeneralComponents/Spinner";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import PageHider from "../../../admin-hoc/PageHider";
import UserMessagesMain from "../UserMessagesMain";
import useUniversalEditData from "../../../admin-hoooks/useUniversalEditData";

const UserMessagesEdit = () => {
    const [navPages, setNavPages] = useState(pages);
    const {id, tableItemEdit: userMessageEdit} = useUniversalEditData('user-messages');

    if (userMessageEdit === null)
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )

    return (
        <EditWindow>
            <form action={`/api/admin/user-messages/${id}`} method='POST' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages} />
                <ErrorLine />
                <SuccessLine />
                <article className="page__content">
                    <PageHider active={navPages.active} index={0} component={UserMessagesMain} />
                    <div className='pt-3 page__button'>
                        <SubmitButton action='user-messages' />
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
};
