import React from 'react'
import {getCompanies} from '../../../admin-actions/companies/companiesActions';

import CompanyItem from "../CompanyItem";
import Spinner from "../../GeneralComponents/Spinner";
import Pagination from "../../GeneralComponents/Pagination";
import Table from "../../GeneralComponents/Table";
import useTableData from "../../../admin-hoooks/useTableData";

const CompaniesTable = () => {
    const companyPage = useTableData('companies', getCompanies);

    if (companyPage === undefined) {
        return <Spinner />
    }

    return (
        <div>
            <Table fields={['ID', 'Название', 'Средний рейтинг', 'Ссылки']}
                   head_key={'companies'}
                   key_field={'company_name'}
                   component={CompanyItem}
                   items={companyPage} />
            <Pagination />
        </div>

    )
}


export default CompaniesTable;
