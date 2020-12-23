import UniversalService from "./UniversalService";


class ImagesService extends UniversalService {
    constructor(apiToken, prefix) {
        super(apiToken, prefix);

        this.getImages = async (page = 1, attributes) => {
            const attributesString = this._getAttributes(attributes);
            try {
                const {data} = await this.axios.get(`${this.baseUrl}/${this.prefix}?api_token=${this.apiToken}&page=${page}${attributesString}`)
                return data;
            } catch (e) {
                this.handleError(e);
            }
        }
        this.updatePage = async (data) => {
            const params = {data, _method: 'POST', api_token: this.apiToken}
            const headers = {}
            try {
                const {data} = await this.axios.post(`${this.baseUrl}/${this.prefix}/change-images-state`, params, headers)
                return data;
            } catch (e) {
                this.handleError(e);
            }
        }
    }
}

export default ImagesService;
