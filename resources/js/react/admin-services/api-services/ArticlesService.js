import axios from 'axios';
import AbstractService from "./AbctractService";

class ArticlesService extends AbstractService {
    constructor(apiToken) {
        super(apiToken);

        this.getArticles = async (page) => {
            try {
                const {data} = await axios.get(`${this.baseUrl}/articles?api_token=${this.apiToken}&page=${page}`);
                return data
            } catch (e) {
                throw {
                    status: e.response.status,
                    value: e.response.data
                }
            }
        }
        this.getArticleEdit = async (id) => {
            try {
                const {data} = await axios.get(`${this.baseUrl}/articles/${id}/edit?api_token=${this.apiToken}`);
                return data
            } catch (e) {
                throw {
                    status: e.response.status,
                    value: e.response.data
                }
            }
        }

        this.update = async (id, data) => {
            const params = {...data, _method: 'PATCH', api_token: this.apiToken}
            const headers = {}
            try {
                const {data} = await axios.patch(`${this.baseUrl}/articles/${id}`, params, headers)
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

export default ArticlesService;
