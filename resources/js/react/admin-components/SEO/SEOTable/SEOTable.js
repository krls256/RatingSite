import React from 'react'
import {getSEO} from "../../../admin-actions/seo/seoActions";
import Spinner from "../../GeneralComponents/Spinner";
import Pagination from "../../GeneralComponents/Pagination/Pagination";
import Table from "../../GeneralComponents/Table";
import SEOItem from "../SEOItem";
import useTableData from "../../../admin-hoooks/useTableData";

const SEOTable = () => {
    const seoPage = useTableData('seo', getSEO);
    if (seoPage === undefined)
        return <Spinner />

    return (
        <div>
            <Table fields={['ID', 'Строковый идентификатор', 'Заголовок', 'Ссылки']}
                   head_key={'seo'}
                   key_field={'title_index'}
                   component={SEOItem} items={seoPage} />
            <Pagination />
        </div>
    )
}

export default SEOTable;
