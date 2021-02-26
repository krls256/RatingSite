import React from 'react';

const Textarea = ({field, label, ReduxObj, onChange, rows = 10}) => {
    return (
        <div className="form-group">
            <label htmlFor={field}>{label}</label>
            <textarea name={field}
                      id={field}
                      rows={rows}
                      onChange={onChange}
                      className='form-control textarea'
                      value={ReduxObj[field] || ''} />
        </div>
    )
}

export default Textarea;
