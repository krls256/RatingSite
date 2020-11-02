const csrfTokenReducer = (state = null, action) => {
    switch (action.type) {
        case 'csrfToken/set': return action.payload;
        break;
        default: return state;
    }
}

export default csrfTokenReducer;
