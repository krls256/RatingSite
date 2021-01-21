import React, {Fragment} from 'react'
import Spinner from "../../GeneralComponents/Spinner";
import Pagination from "../../GeneralComponents/Pagination/Pagination";
import Table from "../../GeneralComponents/Table";
import SEOItem from "../SEOItem";
import useUniversalTableData from "../../../admin-hoooks/useUniversalTableData";
import FilterBar from "../../GeneralComponents/FilterBar";

const SEOTable = () => {
    const seoPage = useUniversalTableData('seo-attributes');

    const content = seoPage === undefined ? <Spinner /> :
        (
            <Fragment>
                <Table fields={['ID', 'Строковый идентификатор', 'Заголовок', 'Ссылки']}
                       head_key={'seo'}
                       key_field={'title_index'}
                       id_key={'id'}
                       component={SEOItem} items={seoPage} />
                <Pagination />
            </Fragment>
        )

    return (
        <section>
            <FilterBar orderBy={orderBy}/>
            {content}
        </section>
    )
}

export default SEOTable;

const orderBy = [
    {
        label: 'Сортировка: ID',
        value: 'id'
    },
    {
        label: 'Сортировка: Название страницы',
        value: 'title'
    }
];
