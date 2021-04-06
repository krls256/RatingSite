import UniversalService from "./UniversalService";


class ReviewsService extends UniversalService {
    constructor(apiToken,) {
        super(apiToken, 'reviews')


        this.publishChange = async (ids_publish, ids_unpublish) => {
            const url = `${this.baseUrl}/reviews/publish`;
            const params = {ids_publish, ids_unpublish, api_token: this.apiToken};
            const headers = {};
            try {
                const {data} = await this.axios.post(url, params, headers);
                return data;
            } catch (e) {
                this.handleError(e);
            }

        }
    }
}


export default ReviewsService
