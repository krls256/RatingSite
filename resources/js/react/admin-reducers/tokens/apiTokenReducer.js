const apiTokenReducer = (state = null, action) => {

    switch (action.type) {
        case "apiToken/updateApiToken": return action.payload; break;
        default: return state; break;
    }
}

export default apiTokenReducer;
