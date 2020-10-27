import React from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import getNearPage from "./getNearPage";
import PaginationItem from "./PaginationItem";

const Pagination = ({currentPage, lastPage}) => {
    const list = getNearPage(currentPage, lastPage)
    return (
        <nav aria-label="Pagination" className='pagination-wrapper'>
            <ul className="pagination ">
                <li className="page-item">
                    <Link className="page-link" to="?page=1" aria-label="First">
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>
                {list.map(num => num === currentPage ?
                    <PaginationItem data={num} current={true} key={num}/>
                    : <PaginationItem data={num} current={false} key={num}/>)}
                <li className="page-item">
                    <Link className="page-link" to="?page=1" aria-label="Last">
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}



const mapStateToProps = ({currentPage, lastPage, companies}) => ({currentPage, lastPage})

export default connect(mapStateToProps)(Pagination);
