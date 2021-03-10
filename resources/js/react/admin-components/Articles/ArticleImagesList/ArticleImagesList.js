import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateModal} from "../../../admin-actions/appState/modalActions";
import {sendRequestToDeleteImage} from "./articleImagesListFunctions";

const ArticleImagesList = ({files}) => {
    return (
        <ul className='list-group pt-3 mb-3'>
            {
                files.map(fileName => (
                    <li className='list-group-item d-flex justify-content-between align-items-center' key={fileName}>
                        <ArticleImagesListItem fileName={fileName}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default ArticleImagesList

const ArticleImagesListItem = ({fileName}) => {
    const dispatch = useDispatch();
    const {apiToken} = useSelector(selector)

    const payload = {
        status: true,
        title: 'Удаление картинки',
        body: (<div>Вы уверены, что хотите удалить картинку по адресу <small>{fileName}</small></div>),
        acceptFunction: () => {
            sendRequestToDeleteImage(fileName, {apiToken}, dispatch)
        }
    }

    const onClick = () => {
        dispatch(updateModal(payload))
    }

    return (
        <Fragment>
            <b>{fileName}</b>
            <span className="badge badge-pill badge-dark" type='button' onClick={onClick}>Удалить</span>
        </Fragment>
    )
}

const selector = ({apiToken, tableItemEdit}) => ({apiToken, tableItemEdit});
