const tableItemEditReducer = (state = null, action) => {
    switch (action.type) {
        case 'tableItemEdit/update': return action.payload;
        case 'tableItemEdit/reset': return null;
        case 'tableItemEdit/addFile': {
            const newObj = {...state};
            newObj.files = [...newObj.files, action.payload]
            return newObj;
        }
        case 'tableItemEdit/removeFile': {
            const newObj = {...state};
            newObj.files = [...newObj.files.filter((fileName) => fileName !== action.payload)];
            return newObj
        }
        default: return state;
    }
}

export default tableItemEditReducer;
