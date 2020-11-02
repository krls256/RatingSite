import React from 'react';
import {useDispatch, connect} from "react-redux";
import {resetErrors} from '../../admin-actions/errorActions'

const ErrorLine = ({errors}) => {
    const dispatch = useDispatch();
    const list = []
    for(const i in errors) {
        errors[i].forEach(e => list.push(e))
    }
    if(list.length === 0)
        return null
    return (
        <div className="alert alert-danger mt-3 ml-3 mr-3 mb-0" role="alert">
            <ul className="message-line">
                {list.map((li) => <li key={li}>{li}</li>)}
            </ul>
            <button type="button" className="close message-line__close" onClick={() => dispatch(resetErrors())}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
const mapStateToProps = ({errors}) => ({errors})

export default connect(mapStateToProps)(ErrorLine);
