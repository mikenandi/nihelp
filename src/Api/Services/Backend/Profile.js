import {axios} from "./Axios";

const Requests = {
	getUserProfile: async function (requestData) {
		try {
			let response = await axios({
				method: "GET",
				url: "/api/v1/profile/user",
				headers: {
					Authorization: requestData.authToken,
				},
				params: {
					userId: requestData.userId,
				},
			});

			return response.data;
		} catch (error) {
			return error.response.data;
		}
	},
};

export const {getUserProfile} = Requests;
