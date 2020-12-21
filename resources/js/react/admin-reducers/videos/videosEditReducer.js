const videosEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'videoEdit/update': return action.payload;
        case 'videoEdit/reset': return  null;
        default: return state;
    }
}

export default videosEditReducer;
