import React from 'react';

const WithContext = (Context) => (Component) => (props) =>{
    return (
        <Context.Consumer>
            {
                (contextData) => <Component {...props} {...contextData}/>
            }
        </Context.Consumer>
    )
}

export default WithContext;
