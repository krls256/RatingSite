const successMessageReducer = (state = {}, action) => {
    switch(action.type) {
        case "successMessage/update": return action.payload;
        case "successMessage/reset": return  {}
        default: return state
    }
}

export default successMessageReducer;
