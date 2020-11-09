import React from 'react';

const Input = ({field, label, ReduxObj, onChange, disabled = false}) => {
    return (
        <div className="form-group">
            <label htmlFor={field}>{label}</label>
            <input type="text"
                   disabled={disabled}
                   name={field}
                   id={field}
                   value={ReduxObj[field] || ''}
                   className='form-control input'
                   onChange={onChange}

            />
        </div>
    )
}

export default Input;
