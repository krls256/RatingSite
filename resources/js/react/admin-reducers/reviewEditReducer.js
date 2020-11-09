const reviewEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'reviewEdit/update': return action.payload;
        case 'reviewEdit/reset': return null;
        default: return state;
    }
}

export default reviewEditReducer;
