import React, {useState} from 'react';
import EditWindow from "../../GeneralComponents/EditWindow";
import Spinner from "../../GeneralComponents/Spinner";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import PageHider from "../../../admin-hoc/PageHider";
import SEOMain from "../SEOMain";
import useUniversalEditData from "../../../admin-hoooks/useUniversalEditData";

const SEOEdit = () => {
    const [navPages, setNavPages] = useState(pages)
    const {id, tableItemEdit: seoEdit} = useUniversalEditData('seo-attributes');

    if (seoEdit === null) {
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )
    }

    return (
        <EditWindow>
            <form action={`/api/admin/reviews/${id}`} method='post' className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages} />
                <ErrorLine />
                <SuccessLine />
                <article className="page__content">
                    <PageHider active={navPages.active} index={0} component={SEOMain} />
                    <div className='pt-3 page__button'>
                        <SubmitButton tableName='seo-attributes' />
                    </div>
                </article>
            </form>
        </EditWindow>
    )
}

export default SEOEdit;

const pages = {
    data: [
        'Главная'
    ],
    active: 0
}
