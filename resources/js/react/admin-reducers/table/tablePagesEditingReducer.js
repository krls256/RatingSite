const initialState = {
    isEditing: false,
    shallowCopy: null
};

const tablePagesEditingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'tablePageEditing/startEdit': {
            return {
                isEditing: true,
                shallowCopy: action.payload
            }
        }
        case 'tablePageEditing/stopEdit': {
            return {
                isEditing: false,
                shallowCopy: state.shallowCopy
            }
        }
        default: return state;
    }
}

export default tablePagesEditingReducer;
