const tableItemEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'tableItemEdit/update': return action.payload;
        case 'tableItemEdit/reset': return null;
        default: return state;
    }
}

export default tableItemEditReducer;
