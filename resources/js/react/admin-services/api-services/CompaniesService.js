import axios from 'axios'
import AbstractService from "./AbctractService";

class CompaniesService extends AbstractService {
    constructor(apiToken) {
        super(apiToken)
        this.getCompanies = async (page = 1) => {
            return (await fetch(`${this.baseUrl}/companies?page=${page}&api_token=${this.apiToken}`)).json();
        }
        this.getEdit = async (id = 1) => {
            return (await fetch(`${this.baseUrl}/companies/${id}/edit?api_token=${this.apiToken}`)).json();
        }
        this.update = (csrfToken) => async (id, data) => {
            const params = {...data, _method: 'PATCH', api_token: this.apiToken}
            const headers = {}

           return await (axios.patch(`${this.baseUrl}/companies/${id}`, params, headers))

        }

        this.getShortList = async () => {
            try {
                const {data} = await axios.get(`${this.baseUrl}/companies/short-list?api_token=${this.apiToken}`)
                return  data
            } catch (e) {
                throw {
                    value: e.response.data,
                    status: e.response.status
                }
            }
        }
    }
}

export default CompaniesService
