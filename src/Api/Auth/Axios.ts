import Axios from "axios";

const axios = Axios.create({
	baseURL: "https://vbas-app-backend.onrender.com",
	timeout: 5000,
});

export {axios};
