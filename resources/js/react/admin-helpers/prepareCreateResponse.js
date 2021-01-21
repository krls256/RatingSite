const prepareCreateResponse = (data) => {
    const newData = {}
    data.forEach(item => newData[item] = '');
    newData['is_published'] === '' ? newData['is_published'] = 0 : null;
    return newData;
}

export default prepareCreateResponse;
