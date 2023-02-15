import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://rentalfeed.onrender.com",
    timeout: 5000,
});

export { axios };
