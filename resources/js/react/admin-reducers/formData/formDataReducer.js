const formDataReducer = (state = null, action) => {
    switch (action.type) {
        case 'formData/update': return action.payload;
        case 'formData/reset': return null;
        default: return state;
    }
}

export default formDataReducer;
