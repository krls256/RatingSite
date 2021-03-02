import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {resetModal} from "../../../admin-actions/appState/modalActions";
import EditWindow from "../EditWindow";

const Modal = () => {
    const {modal: {status, title, body, acceptFunction}} = useSelector(selector);
    const dispatch = useDispatch();
    const initialClassName = 'modal show fade b-dark-a5';
    const className = status ? initialClassName + ' d-block' : initialClassName + ' d-none';

    const onRejectClick = () => dispatch(resetModal());
    const onAcceptClick = (e) => {
        acceptFunction(e);
        dispatch(resetModal());
    };

    return (
            <aside className={className}>
                <div className="modal-dialog modal-dialog-centered w-75">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
                            <button onClick={onRejectClick}
                                    type="button"
                                    className="close"
                                    aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {body}
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn b-dark c-white"
                                    onClick={onRejectClick}>Закрыть
                            </button>
                            <button type="button"
                                    className="btn btn-danger"
                                    onClick={onAcceptClick}>Применить
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
    );
}

export default Modal


const selector = ({modal}) => ({modal});
