

class CompaniesService {
    constructor(apiToken) {
        this.apiToken = apiToken;
        this.baseUrl = '/api/admin';
        this.getCompanies = async (page = 1) => {
            return (await fetch(`${this.baseUrl}/companies?page=${page}&api_token=${this.apiToken}`)).json();
        }
    }
}

export default CompaniesService
