import UniversalService from "./UniversalService";

class CompaniesService extends UniversalService {
    constructor(apiToken, prefix) {
        super(apiToken, prefix)


        this.getShortList = async () => {
            try {
                const {data} = await this.axios.get(`${this.baseUrl}/companies/short-list?api_token=${this.apiToken}`)
                return  data
            } catch (e) {
                this.handleError(e);
            }
        }
    }
}

export default CompaniesService
