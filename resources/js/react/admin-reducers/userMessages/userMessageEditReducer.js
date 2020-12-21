const userMessageEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'userMessageEdit/update': return action.payload;
        case 'userMessageEdit/reset': return null;
        default: return state;
    }
}

export default userMessageEditReducer;
