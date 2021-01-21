import React from 'react';

const Table = ({fields, head_key, component, items, key_field, id_key}) => {
    const Component = component;
    return (
        <table className="table table-list_companies">
            <thead>
            <tr className='c-dark'>
                {
                    fields.map(item => <th scope="col" key={head_key+item}>{item}</th>)
                }
            </tr>
            </thead>
            <tbody>
            {
                items.map(data => {
                    return <Component data={data} key={`${data[id_key]}.${data[key_field]}`}/>
                })
            }
            </tbody>
        </table>
    )
}

export default Table;
