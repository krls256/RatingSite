const articleEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'articleEdit/update': return action.payload;
        case 'articleEdit/reset': return null;
        default: return state;
    }
}

export default articleEditReducer;
