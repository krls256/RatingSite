const setFilterAttributes = (key, payload) => ({type: 'filterAttributes/set', key, payload});
const resetFilterAttributes = () => ({type: 'filterAttributes/reset'});

export {
    setFilterAttributes,
    resetFilterAttributes
}
