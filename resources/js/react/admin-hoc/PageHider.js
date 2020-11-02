import React from 'react';

const PageHider = ({component, index, active}) => {
    const hidden = !(index === active);
    const Page = component;
    if (hidden) {
        return (
            <div className='hidden'>
                <Page/>
            </div>
        )
    } else {
        return <Page/>
    }
}

export default PageHider
