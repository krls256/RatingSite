const initialState = {status: false}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "modal/update": return action.payload;
        case "modal/reset": return initialState;
        default: return  state;
    }
}

export default modalReducer;
