const resetModal = () => ({type: 'modal/reset'});

const updateModal = (payload) => ({type: 'modal/update', payload});

export {
    resetModal, updateModal
}
