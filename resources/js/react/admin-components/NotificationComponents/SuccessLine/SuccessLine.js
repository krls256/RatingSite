import React from 'react';
import {connect, useDispatch} from 'react-redux'
import {successMessageReset} from "../../../admin-actions/appState/successMessageActions";

const SuccessLine = ({successMessage}) => {
    const dispatch = useDispatch();
    const list = []
    for(const i in successMessage) {
        successMessage[i].forEach(e => list.push(e))
    }
    if(list.length === 0)
        return null
    return (
        <div className="alert alert-success mt-3 mb-0" role="alert">
            <ul className="message-line">
                {list.map((li) => <li key={li}>{li}</li>)}
            </ul>
            <button type="button" className="close message-line__close" onClick={() => dispatch(successMessageReset())}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

const mapStateToPtops = ({successMessage}) => ({successMessage});

export default connect(mapStateToPtops)(SuccessLine)
