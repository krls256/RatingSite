import React, {useEffect, useState, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {getCompanyEdit, resetCompanyEdit} from '../../admin-actions/companyEditActions'
import Spinner from "../Spinner";
import EditNavbar from "../EditNavbar";
import CompanyMain from "../CompanyMain";
import CompanyContacts from "../CompanyContacts";
import CompanySocialNetworks from "../CompanySocialNetworks";
import CompanyStatistics from "../CompanyStatistics";
import PageHider from "../../admin-hoc/PageHider";
import CompanySubmit from "../CompanySubmit";
import ErrorLine from "../ErrorLine/ErrorLine";
import SuccessLine from "../SuccessLine/SuccessLine";

const CompanyEdit = ({apiToken, companyEdit}) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [navPages, setNavPages] = useState(pages)
    const formRef = useRef(null)
    useEffect(() => {
        if(apiToken) {
            dispatch(getCompanyEdit(id))
        }
        return () => dispatch(resetCompanyEdit())
    }, [apiToken, id]);
    if(companyEdit === null)
        return <Spinner />
    return (
        <form action={`/api/admin/companies/${id}`} method='post' ref={formRef} className='page'>
           <EditNavbar navList={navPages} changeNavList={setNavPages}/>
           <ErrorLine/>
           <SuccessLine/>
           <article className="page__content">
               <PageHider component={CompanyMain} index={0} active={navPages.active}/>
               <PageHider component={CompanyContacts}  index={1} active={navPages.active}/>
               <PageHider component={CompanySocialNetworks} index={2} active={navPages.active}/>
               <PageHider component={CompanyStatistics} index={3} active={navPages.active}/>
               <CompanySubmit form={formRef} id={id}/>
           </article>
        </form>
    )
}

const mapStateToProps = ({apiToken, companyEdit}) => ({apiToken, companyEdit})

export default connect(mapStateToProps)(CompanyEdit);

const pages = {
    data: [
        'Главная',
        'Контакты',
        'Соц. сети',
        'Статистика'
    ],
    active: 0
}
