import React from 'react';

const Textarea = ({field, label, ReduxObj, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor={field}>{label}</label>
            <textarea name={field}
                      id={field}
                      rows="10"
                      onChange={onChange}
                      className='form-control textarea'
                      value={ReduxObj[field] || ''} />
        </div>
    )
}

export default Textarea;
