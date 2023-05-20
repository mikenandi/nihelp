import {AxiosError} from "axios";
import {axios} from "./Axios";

interface IGetUser {
	authToken: string;
}

const Requests = {
	getUserProfile: async function (inputs: IGetUser) {
		try {
			let response = await axios({
				method: "GET",
				url: "/user",
				headers: {
					Authorization: `Bearer ${inputs.authToken}`,
				},
			});

			return response.data;
		} catch (error: any) {
			return error.response.data;
		}
	},
};

export const {getUserProfile} = Requests;
