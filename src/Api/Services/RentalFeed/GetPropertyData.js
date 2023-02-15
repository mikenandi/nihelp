import { axios } from "./Axios";

const Requests = {
    getLandlordProperties: async function (requestData) {
        try {
            let response = await axios({
                method: "GET",
                url: "/api/v1/property/landlord-properties",
                headers: {
                    Authorization: requestData.authToken,
                },
                params: { userId: requestData.userId },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
};

export const { getLandlordProperties } = Requests;
