import AbstractService from "./AbctractService";
import axios from 'axios';

class ReviewsService extends AbstractService{
    constructor(apiToken) {
        super(apiToken);
        this.getReviews = async (page = 1) => {
            try {
                const {data} = await axios.get(`${this.baseUrl}/reviews?page=${page}&api_token=${this.apiToken}`)
                return data;
            } catch (e) {
                throw e.response.status;
            }
        }
        this.getEdit = async (id = 1) => {
            try {
                const {data} = await axios.get(`${this.baseUrl}/reviews/${id}/edit?&api_token=${this.apiToken}`)
                return data;
            } catch (e) {
                throw e.response.status;
            }
        }
        this.update = async (id = 1, dataToUpdate) => {
            const params = {...dataToUpdate, _method: 'PATCH', api_token: this.apiToken}
            const headers = {}
            try {
                const {data} = await axios.patch(`${this.baseUrl}/reviews/${id}`, params, headers)
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

export default ReviewsService;
