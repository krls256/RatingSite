import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getImages} from "../../../admin-actions/images/imagesActions";
import Spinner from "../../GeneralComponents/Spinner";
import ImageItem from "../ImageItem/ImageItem";
import Pagination from "../../GeneralComponents/Pagination/Pagination";
import ErrorLine from "../../NotificationComponents/ErrorLine/ErrorLine";
import SuccessLine from "../../NotificationComponents/SuccessLine/SuccessLine";
import ImagesCommandLine from "../ImagesComandLine";

const ImagesPage = () => {
    const {currentPage, images, apiToken, errorsMessage} = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(() => {
        if(apiToken && images[currentPage] === undefined)
            dispatch(getImages())
    }, [apiToken, currentPage])


    if(Object.keys(errorsMessage).length !== 0)
        return <ErrorLine />;


    const content = images[currentPage] !== undefined ?
        (<ul className='image-page__list'>
        {
            images[currentPage].map((data, index) => {
                return (
                    <li className='image-page__list-item' key={data.image_link}>
                        <ImageItem data={data} index={index} pageIndex={currentPage}/>
                    </li>
                )
            })
        }
        </ul>) : <Spinner />
    return (
        <section className='image-page'>
            <ImagesCommandLine />
            <ErrorLine />
            <SuccessLine />

                {content}
            <Pagination />
        </section>
    )
}

const selector = ({currentPage, images, apiToken, errorsMessage}) => ({currentPage, images, apiToken, errorsMessage})

export default ImagesPage;

