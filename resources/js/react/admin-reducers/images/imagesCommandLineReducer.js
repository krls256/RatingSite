const initialValue = {
    company_id: '',
    is_published: '',
    is_on_company_page: ''
}

const imagesCommandLineReducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'imagesCommandLine/update': return action.payload;
        default: return state;
    }
}

export default imagesCommandLineReducer;
