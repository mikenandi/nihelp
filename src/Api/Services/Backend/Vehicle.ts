import {axios} from "./Axios";

export interface IPostVehicle {
	make: string;
	model: string;
	modelYear: string;
	bodyType: string;
	fuelType: string;
	chassisNumber: string;
	plateNumber: string;
}

const postVehicle = async (inputs: IPostVehicle, authToken: string) => {
	try {
		let response = await axios({
			method: "POST",
			url: "/vehicle",
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
			data: {
				...inputs,
			},
		});

		return response.data;
	} catch (error: any) {
		return error.response.data;
	}
};

export {postVehicle};
