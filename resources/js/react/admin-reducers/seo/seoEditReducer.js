const seoEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'seoEdit/update': return action.payload;
        case 'seoEdit/reset': return null;
        default: return state;
    }
}

export default seoEditReducer;
