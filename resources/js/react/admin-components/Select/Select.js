import React from 'react';

const Select = ({options, id, onChange}) => {
    return (
        <label htmlFor={id} className='select  mr-2'>
            <select name={id} id={id}
                    className='select__main'
                    onChange={onChange}>
                {
                    options.map(({label, value}) => {
                        return (
                            <option key={label+value}
                                    value={value}
                                    className='select__option'>{label}</option>
                        )
                    })
                }
            </select>
        </label>
    )
}

export default Select;
