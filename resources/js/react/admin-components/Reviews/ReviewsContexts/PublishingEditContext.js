import React from 'react';

const PublishingEditContext = React.createContext(false);

export default {
    Provider: PublishingEditContext.Provider,
    Consumer: PublishingEditContext.Consumer
}

