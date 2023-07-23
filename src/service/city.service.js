const { CityRepository } = require("../repository/index");

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(name) {
        try {
            const city = await this.cityRepository.createCity(name);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await this.cityRepository.deleteCity(name);
            return true;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async updateCity(cityID, data) {
        try {
            const city = this.cityRepository.updateCity(cityID, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getCity(cityID) {
        try {
            const city = this.cityRepository.getCity(cityID);
            return city;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}
