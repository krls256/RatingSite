class AbstractService {
    constructor(apiToken) {
        this.apiToken = apiToken;
        this.baseUrl = '/api/admin';
    }
}
 export default AbstractService
