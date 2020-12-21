import React, {useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

const EditWindow = ({children}) => {
    const ref = useRef(null);
    let history = useHistory();

    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden';
        return () => document.querySelector('body').style.overflow = '';
    }, [])

    const onClick = (e) => {
        if(e.target === ref.current)
            history.goBack()
    }
    return (
        <div className='edit-window' onMouseDown={onClick} ref={ref}>
            <div  className='edit-window__content'>
                {children}
            </div>
        </div>
    )

}


export default EditWindow;
