import React, {useEffect} from 'react'
import {connect, useDispatch} from "react-redux";
import {getCompanies} from '../../admin-actions/companiesActions';

import CompanyItem from "../CompanyItem";
import Spinner from "../Spinner";
import Pagination from "../Pagination";
import Table from "../Table";

const CompaniesTable = ({companies, apiToken, currentPage}) => {
    const dispatch = useDispatch();
    useEffect(() => {
       if(apiToken !== null && companies[currentPage] === undefined) {
           dispatch(getCompanies(currentPage))
       }
    }, [apiToken, currentPage]);

    if(companies[currentPage] === undefined) {
        return <Spinner />
    }

    return (
        <div>
            <Table fields={['ID', 'Название', 'Средний рейтинг', 'Ссылки']}
                   head_key={'companies'}
                   key_field={'company_name'}
                   component={CompanyItem}
                   items={companies[currentPage]}/>
            <Pagination />
        </div>

    )
}
const mapStateToProps = ({companies, apiToken, currentPage}) => ({companies, apiToken, currentPage});

export default connect(mapStateToProps, null)(CompaniesTable);
