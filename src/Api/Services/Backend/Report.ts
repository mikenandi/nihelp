import {axios} from "./Axios";

const Requests = {
// @ts-expect-error TS(7006): Parameter 'requestData' implicitly has an 'any' ty... Remove this comment to see the full error message
	postRoute: async function (requestData) {
		try {
			let response = await axios({
				method: "POST",
				url: "/api/v1/report/route",
				headers: {
					Authorization: requestData.authToken,
				},
				data: {
					userId: requestData.userId,
					start: requestData.starting,
					destination: requestData.destination,
				},
			});

			return response.data;
		} catch (error) {
// @ts-expect-error TS(2571): Object is of type 'unknown'.
			return error.response.data;
		}
	},
// @ts-expect-error TS(7006): Parameter 'requestData' implicitly has an 'any' ty... Remove this comment to see the full error message
	reportBreakdown: async function (requestData) {
		try {
			let response = await axios({
				method: "POST",
				url: "/api/v1/report/route",
				headers: {
					Authorization: requestData.authToken,
				},
				data: {
					userId: requestData.userId,
					start: requestData.starting,
					destination: requestData.destination,
				},
			});

			return response.data;
		} catch (error) {
// @ts-expect-error TS(2571): Object is of type 'unknown'.
			return error.response.data;
		}
	},
};

export const {postRoute} = Requests;
