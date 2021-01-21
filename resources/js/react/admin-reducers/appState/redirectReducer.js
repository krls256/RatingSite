const redirectReducer = (state = null, action) => {
    switch (action.type) {
        case 'redirect/update': return action.payload;
        case 'redirect/reset': return null;
        default: return state;
    }
}

export default redirectReducer;
