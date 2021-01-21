const updateRedirect = (payload) => ({type: 'redirect/update', payload});
const resetRedirect = () => ({type: 'redirect/reset'});

export {
    updateRedirect, resetRedirect
}
