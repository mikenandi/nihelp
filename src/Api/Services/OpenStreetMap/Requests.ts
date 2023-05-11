import { axios } from "./Axios";

async function getLocationData(data) {
    try {
        let response = await axios({
            method: "GET",
            url: "/reverse/",
            params: {
                format: "json",
                lat: data.latitude,
                lon: data.longitude,
                zoom: 18,
                addressdetails: 1,
            },
        });

        return response.data;
    } catch (error) {
        if (error.code === "ERR_NETWORK") {
            return {
                code: error.code,
                message: error.message,
            };
        }
    }
}

export { getLocationData };
