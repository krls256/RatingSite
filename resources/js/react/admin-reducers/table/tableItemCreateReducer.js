const tableItemCreateReducer = (state = null, action) => {
    switch (action.type) {
        case 'tableItemCreate/update': return action.payload;
        default: return state;
    }
}

export default tableItemCreateReducer;
