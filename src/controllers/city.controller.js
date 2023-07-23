const { CityService } = require("../service/index");

const cityService = new CityService();

const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: true,
            message: "Not able to create a city",
            err: error,
        });
    }
};

// delete -> /city/:id
const destroy = async (req, res) => {
    try {
        const resposne = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: resposne,
            success: true,
            message: "City deleted successfully",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: true,
            message: "Not able to delete a city",
            err: error,
        });
    }
};
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the city",
            err: error,
        });
    }
};
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "City is fetched successfully",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: true,
            message: "unable to get city",
            err: error,
        });
    }
};

module.exports = { create, destroy, update, get };
