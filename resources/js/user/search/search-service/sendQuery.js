import axios from 'axios';

const sendQuery = async (query, counter) => {
    try {
        const {data} = await axios.get(`/api/search/search-bar/${query}/${counter}`);
        return data;
    } catch (e) {
        throw {
            e
        }
    }


}

export default sendQuery;
