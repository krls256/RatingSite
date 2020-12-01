const throwError = (e) => {
    throw {
        status: e.response.status,
        value: e.response.data
    }
}

export default throwError;
