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
            <table className="table table-list_companies">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Название</th>
                    <th scope="col">Средний рейтинг</th>
                    <th scope="col">Ссылки</th>
                </tr>
                </thead>
                <tbody>
                    {CompanyItems}
                </tbody>
            </table>
            <Pagination />
        </div>

    )
}
const mapStateToProps = ({companies, apiToken, currentPage}) => ({companies, apiToken, currentPage});

export default connect(mapStateToProps, null)(CompaniesTable);
