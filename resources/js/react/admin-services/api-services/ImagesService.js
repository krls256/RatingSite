import axios from 'axios';
import AbstractService from "./AbctractService";


class ImagesService extends AbstractService {
    constructor(apiToken) {
        super(apiToken);

        this.getImages = async (page = 1, attr) => {
            let attributes = '';
            for(const i in attr) {
                if (attr[i] !== '')
                    attributes += `&${i}=${attr[i]}`
            }

            try {
                const {data} = await axios.get(`${this.baseUrl}/images?api_token=${this.apiToken}&page=${page}${attributes}`)
                return data;
            } catch (e) {
                throw {
                    status: e.response.status,
                    value: e.response.data
                };
            }
        }
        this.updatePage = async (data) => {
            const params = {data, _method: 'POST', api_token: this.apiToken}
            const headers = {}
            try {
                const {data} = await axios
                    .post(`${this.baseUrl}/images/change-images-state`, params, headers)
                return data;
            } catch (e) {
                throw {
                    status: e.response.status,
                    value: e.response.data
                };
            }
        }
    }
}

export default ImagesService;
