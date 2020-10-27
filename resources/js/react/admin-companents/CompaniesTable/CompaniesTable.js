import React, {useEffect} from 'react'
import {connect, useDispatch} from "react-redux";
import {getCompanies} from '../../admin-actions/companiesActions';

import CompanyItem from "../CompanyItem";
import Spinner from "../Spinner";
import Pagination from "../Pagination";

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

    const CompanyItems = companies[currentPage]
        .map(item => <CompanyItem id={item.company_id}
                                  name={item.company_name}
                                  averageMark={item.company_average_mark}
                                  key={item.company_name}/>)
    return (
        <div>
            <ul className='list-group'>
                {CompanyItems}
            </ul>
            <Pagination />
        </div>

    )
}
const mapStateToProps = ({companies, apiToken, currentPage}) => ({companies, apiToken, currentPage});

export default connect(mapStateToProps, null)(CompaniesTable);
