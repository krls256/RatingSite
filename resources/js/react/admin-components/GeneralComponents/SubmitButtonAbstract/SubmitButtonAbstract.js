import React from 'react';

const SubmitButtonAbstract = ({onClick}) => {
    return (
        <button type='submit' onClick={onClick} className='btn b-dark c-white'>Сохранить</button>
    )
}

export default SubmitButtonAbstract;
