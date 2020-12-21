import React from 'react';

const PageHider = ({component, index, active}) => {
    const hidden = !(index === active);
    const Page = component;
    if (hidden) {
        return null;
    } else {
        return <Page/>
    }
}

export default PageHider;
