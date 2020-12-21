import React, {useRef, useState} from 'react';
import {getCompanyEdit, resetCompanyEdit, updateCompanyMain} from '../../../admin-actions/companies/companyEditActions'
import Spinner from "../../GeneralComponents/Spinner";
import EditNavbar from "../../GeneralComponents/EditNavbar";
import CompanyMain from "../CompanyMain";
import CompanyContacts from "../CompanyContacts";
import CompanySocialNetworks from "../CompanySocialNetworks";
import CompanyStatistics from "../CompanyStatistics";
import PageHider from "../../../admin-hoc/PageHider";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import SubmitButton from "../../GeneralComponents/SubmitButton";
import EditWindow from "../../GeneralComponents/EditWindow";
import useEditData from "../../../admin-hoooks/useEditData";

const CompanyEdit = () => {
    const [navPages, setNavPages] = useState(pages);
    const {id, companyEdit} = useEditData('companyEdit', getCompanyEdit, resetCompanyEdit);
    const formRef = useRef(null);

    if (companyEdit === null)
        return (
            <EditWindow>
                <Spinner />
            </EditWindow>
        )

    return (
        <EditWindow>
            <form action={`/api/admin/companies/${id}`} method='post' ref={formRef} className='page'>
                <EditNavbar navList={navPages} changeNavList={setNavPages} />
                <ErrorLine />
                <SuccessLine />
                <article className="page__content">
                    <PageHider component={CompanyMain} index={0} active={navPages.active} />
                    <PageHider component={CompanyContacts} index={1} active={navPages.active} />
                    <PageHider component={CompanySocialNetworks} index={2} active={navPages.active} />
                    <PageHider component={CompanyStatistics} index={3} active={navPages.active} />

                    <div className='pt-3 page__button'>
                        <SubmitButton action={updateCompanyMain} />
                    </div>
                </article>
            </form>
        </EditWindow>
    )
}


export default CompanyEdit;

const pages = {
    data: [
        'Главная',
        'Контакты',
        'Соц. сети',
        'Статистика'
    ],
    active: 0
}
