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

        this.getPagination = async (page, attributes = '') => {
            const attributesString = attributes === '' ? attributes : this._getAttributes(attributes);
            try {
                const {data} = await this.axios.get(`${this.baseUrl}/${this.prefix}?api_token=${this.apiToken}&page=${page}${attributesString}`);
                return data;
            } catch (e) {
                this.handleError(e);
            }
        }

        this.getEdit = async (id) => {
            try {
                const url = `${this.baseUrl}/${this.prefix}/${id}/edit?api_token=${this.apiToken}`;
                const {data} = await this.axios.get(url);
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
        this._getAttributes = (attributes) => {
            let str = '';
            for(const i in attributes) {
                if (attributes[i] !== '')
                    str += `&${i}=${attributes[i]}`
            }
            return str;
        }

        this.getCreate = async () => {
            try {
                const {data} = await this.axios.get(`${this.baseUrl}/${this.prefix}/create?api_token=${this.apiToken}`);
                return data;
            } catch (e) {
                this.handleError(e);
            }
        }

        this.store = async (data) => {
            const params = {...data, _method: 'POST', api_token: this.apiToken}
            const headers = {}
            try {
                const {data} = await this.axios.post(`${this.baseUrl}/${this.prefix}`, params, headers);
                return data;
            } catch (e) {
                this.handleError(e);
            }
        }

        this.storeWithFiles = async (params, data) => {
            for(const i in data) {
                params.append(i, data[i]);
            }
            params.append('api_token', this.apiToken);
            const headers = {'Content-Type': 'multipart/form-data'};

            try {
                const {data} = await this.axios.post(`${this.baseUrl}/${this.prefix}`, params, headers);
                return data;
            } catch (e) {
                this.handleError(e);
            }
        }
    }
}


export default UniversalService;
