const headerEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'headerEdit/update': return action.payload;
        case 'headerEdit/reset': return null;
        default: return state;
    }
}

export default headerEditReducer;
