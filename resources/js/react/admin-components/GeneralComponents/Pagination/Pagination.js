import React from 'react';
import {Link} from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import getNearPage from "./getNearPage";
import PaginationItem from "./PaginationItem";
import {setCurrentPage} from "../../../admin-actions/currentPageActions";

const Pagination = ({currentPage, lastPage}) => {
    const dispatch = useDispatch()
    const list = getNearPage(currentPage, lastPage)
    return (
        <nav aria-label="Pagination" className='pagination-wrapper'>
            <ul className="pagination ">
                <li className="page-item">
                    <Link className="page-link" to="?page=1" aria-label="First"
                          onClick={() => dispatch(setCurrentPage(1))}>
                        <span aria-hidden="true">&laquo;</span>
                    </Link>
                </li>
                {list.map(num => num === currentPage ?
                    <PaginationItem data={num} current={true} key={num}/>
                    : <PaginationItem data={num} current={false} key={num}/>)}
                <li className="page-item">
                    <Link className="page-link" to={`?page=${lastPage}`} aria-label="Last"
                          onClick={() => dispatch(setCurrentPage(lastPage))}>
                        <span aria-hidden="true">&raquo;</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}



const mapStateToProps = ({currentPage, lastPage, companies}) => ({currentPage, lastPage})

export default connect(mapStateToProps)(Pagination);
