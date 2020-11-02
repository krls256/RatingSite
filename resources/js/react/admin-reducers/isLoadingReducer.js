const isLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case 'isLoading/setTrue': return true; break;
        case 'isLoading/setFalse': return false; break;
        default: return state;
    }
}

export default isLoadingReducer;
