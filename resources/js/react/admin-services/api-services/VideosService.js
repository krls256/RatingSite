import AbstractService from "./ArticlesService";
import axios from 'axios'
import throwError from "../../admin-helpers/throw-error";

class VideosService extends AbstractService {
    constructor(apiToken) {
        super(apiToken);

        this.getVideos = async (page) => {
            try {
                const {data} = await axios.get(`${this.baseUrl}/videos?api_token=${this.apiToken}&page=${page}`);
                return data;
            } catch (e) {
                throwError(e)
            }
        }

        this.getVideoEdit = async (id) => {
            try {
                const {data} = await axios.get(`${this.baseUrl}/videos/${id}/edit?api_token=${this.apiToken}`);
                return data;
            } catch (e) {
                throwError(e)
            }
        }

        this.update = async (id, data) => {
            const params = {...data, _method: 'PATCH', api_token: this.apiToken}
            const headers = {}
            try {
                const {data} = await axios.patch(`${this.baseUrl}/videos/${id}`, params, headers)
                return data;
            } catch (e) {
                throwError(e)
            }
        }
    }
}

export default VideosService
