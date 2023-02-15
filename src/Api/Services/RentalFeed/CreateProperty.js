import { axios } from "./Axios";

const Requests = {
    createProperty: async function (requestData) {
        try {
            let response = await axios({
                method: "POST",
                headers: {
                    Authorization: requestData.authToken,
                },
                url: "/api/v1/property/create-property",
                data: requestData,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    saveLocation: async function (requestData) {
        try {
            let response = axios({
                method: "POST",
                headers: {
                    Authorization: requestData.authToken,
                },
                url: "/api/v1/property/create-property-location",
                data: requestData,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    saveAmenities: async function (requestData) {
        try {
            let response = axios({
                method: "POST",
                headers: {
                    Authorization: requestData.authToken,
                },
                url: "/api/v1/property/create-amenities",
                data: requestData,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    saveImgSource: async function (requestData) {
        try {
            let response = axios({
                method: "POST",
                headers: {
                    Authorization: requestData.authToken,
                },
                url: "/api/v1/property/create-property-img",
                data: requestData,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    saveRoomType: async function (requestData) {
        try {
            let response = axios({
                method: "POST",
                headers: {
                    Authorization: requestData.authToken,
                },
                url: "/api/v1/property/create-room-type",
                data: requestData,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    saveRoomAvailable: async function (requestData) {
        try {
            let response = axios({
                method: "POST",
                headers: {
                    Authorization: requestData.authToken,
                },
                url: "/api/v1/property/create-rooms-available",
                data: requestData,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    saveRoomCount: async function (requestData) {
        try {
            let response = axios({
                method: "POST",
                headers: {
                    Authorization: requestData.authToken,
                },
                url: "/api/v1/property/create-room-count",
                data: requestData,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
};

export const {
    createProperty,
    saveAmenities,
    saveImgSource,
    saveLocation,
    saveRoomAvailable,
    saveRoomCount,
    saveRoomType,
} = Requests;
