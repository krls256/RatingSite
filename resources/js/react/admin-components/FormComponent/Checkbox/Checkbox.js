import React from 'react';

const Checkbox = ({label, value, onChange}) => {
    return (
        <label className='checkbox mb-0'>
            <input
                className='checkbox__input'
                name="is_published"
                type="checkbox"
                checked={value}
                value={value}
                onChange={onChange}/>
            <i className="checkbox__fake"></i>
            <span>{label}</span>
        </label>
    )
}

export default Checkbox
