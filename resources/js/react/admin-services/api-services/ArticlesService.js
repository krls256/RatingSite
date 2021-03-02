import UniversalService from "./UniversalService";


class ArticlesService extends UniversalService {
    constructor(apiToken, prefix) {
        super(apiToken, prefix);

        this.updateMainImage = async (id, file) => {
            const url = `${this.baseUrl}/${this.prefix}/${id}/main-image?api_token=${this.apiToken}`;
            const params = new FormData();
            params.append('api_token', this.apiToken);
            params.append('file', file);
            const headers = {'Content-Type': 'multipart/form-data'};

            try {
                const {data} = await this.axios.post(url, params, headers)

                return data;
            } catch (e) {
                this.handleError(e);
            }

        }

        this.deleteImage = async (path) => {
            const url = `${this.baseUrl}/${this.prefix}/delete-image?api_token=${this.apiToken}`;
            const params = {path};

            try {
                const {data} = await this.axios.post(url, params);

                return data;
            } catch (e) {
                this.handleError(e);
            }
        }

        this.uploadImage = async (id, image) => {
            const url = `${this.baseUrl}/${this.prefix}/${id}/upload-image?api_token=${this.apiToken}`;
            const params = new FormData();
            params.append('api_token', this.apiToken);
            params.append('image', image);
            const headers = {'Content-Type': 'multipart/form-data'};

            try {
                const {data} = await this.axios.post(url, params, headers)

                return data;
            } catch (e) {
                this.handleError(e);
            }
        }
    }
}

export default ArticlesService;
