import { axios } from "./Axios";

const Requests = {
    acceptTour: async function (requestData) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/landlord/accept-tour",
                headers: {
                    Authorization: requestData.authToken,
                },
                data: { tourId: requestData.tourId },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    rejectTour: async function (requestData) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/landlord/reject-tour",
                headers: {
                    Authorization: requestData.authToken,
                },
                data: { tourId: requestData.tourId },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    getPendingTours: async function (requestData) {
        try {
            let response = await axios({
                method: "GET",
                url: "/api/v1/landlord/pending-tours",
                headers: {
                    Authorization: requestData.authToken,
                },
                params: { propertyId: requestData.propertyId },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    getAcceptedTours: async function (requestData) {
        try {
            let response = await axios({
                method: "GET",
                url: "/api/v1/landlord/accepted-tours",
                headers: {
                    Authorization: requestData.authToken,
                },
                params: { propertyId: requestData.propertyId },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
};

export const { acceptTour, rejectTour, getAcceptedTours, getPendingTours } =
    Requests;
