import Axios from "axios";
import * as SecureStore from "expo-secure-store";

const axios = Axios.create({
    baseURL: "https://rentalfeed.onrender.com",
    timeout: 9000,
});

export { axios };
