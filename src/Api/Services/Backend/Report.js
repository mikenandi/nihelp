import {axios} from "./Axios";

const Requests = {
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
					starting: requestData.starting,
					destination: requestData.destination,
				},
			});

			return response.data;
		} catch (error) {
			return error.response.data;
		}
	},
};

export const {postRoute} = Requests;
