import React, {useState} from 'react';
import EditWindow from "../../GeneralComponents/EditWindow";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import PageHider from "../../../admin-hoc/PageHider";
import HeadersMain from "../HeadersMain";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import Spinner from "../../GeneralComponents/Spinner";
import useUniversalEditData from "../../../admin-hoooks/useUniversalEditData";

const HeadersEdit = () => {
    const [navPages, setNavPages] = useState(pages);
    const {id, tableItemEdit: headerEdit} = useUniversalEditData('headers')

    if (headerEdit === null) {
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )
    }

    return (
        <EditWindow>
            <form action={`/api/admin/headers/${id}`} method='post' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages} />
                <ErrorLine />
                <SuccessLine />
                <article className="page__content">
                    <PageHider component={HeadersMain} index={0} active={navPages.active} />
                    <div className='pt-3 page__button'>
                        <SubmitButton tableName='headers' />
                    </div>
                </article>
            </form>
        </EditWindow>
    )
}

export default HeadersEdit

const pages = {
    data: [
        'Главная'
    ],
    active: 0
};
