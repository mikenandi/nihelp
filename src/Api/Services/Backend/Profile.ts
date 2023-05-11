import {axios} from "./Axios";

const Requests = {
// @ts-expect-error TS(7006): Parameter 'requestData' implicitly has an 'any' ty... Remove this comment to see the full error message
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
// @ts-expect-error TS(2571): Object is of type 'unknown'.
			return error.response.data;
		}
	},
};

export const {getUserProfile} = Requests;
