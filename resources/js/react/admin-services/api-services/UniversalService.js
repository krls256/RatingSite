import axios from 'axios';
import AbstractService from "./AbctractService";

class UniversalService extends AbstractService {
    constructor(apiToken, prefix) {
        super(apiToken);
        this.axios = axios;
        this.prefix = prefix;

        this.handleError = (e) => {
            throw {
                status: e.response.status,
                value: e.response.data
            }
        }

        this.getPagination = async (page) => {
            try {
                const {data} = await this.axios.get(`${this.baseUrl}/${this.prefix}?api_token=${this.apiToken}&page=${page}`);
                return data;
            } catch (e) {
                this.handleError(e);
            }
        }

        this.getEdit = async (id) => {
            try {
                const {data} = await this.axios.get(`${this.baseUrl}/${this.prefix}/${id}/edit?api_token=${this.apiToken}`);
                return data;
            } catch (e) {
                this.handleError(e);
            }
        }

        this.update = async (id, data) => {
            const params = {...data, _method: 'PATCH', api_token: this.apiToken}
            const headers = {}
            try {
                const {data} = await this.axios.patch(`${this.baseUrl}/${this.prefix}/${id}`, params, headers);
                return data;
            } catch (e) {
                this.handleError(e);
            }
        }
    }
}


export default UniversalService;