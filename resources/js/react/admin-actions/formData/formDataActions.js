const formDataUpdate = (payload) => ({type: 'formData/update', payload});
const formDataReset = () => ({type: 'formData/reset'});

export {
    formDataUpdate, formDataReset
}
