import { axios } from "./Axios";

const Requests = {
    userProfile: async function (requestData) {
        try {
            let response = await axios({
                method: "GET",
                url: "/api/v1/profile/user-profile",
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
    updateProfileName: async function (requestData) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/profile/update-name",
                headers: {
                    Authorization: requestData.authToken,
                },
                params: {
                    userId: requestData.userId,
                },
                data: {
                    firstName: requestData.firstname,
                    lastName: requestData.lastname,
                },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    updateGender: async function (requestData) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/profile/update-gender",
                headers: {
                    Authorization: requestData.authToken,
                },
                params: {
                    userId: requestData.userId,
                },
                data: {
                    gender: requestData.gender,
                },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    updateBirthdate: async function (requestData) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/profile/update-birthdate",
                headers: {
                    Authorization: requestData.authToken,
                },
                params: {
                    userId: requestData.userId,
                },
                data: {
                    birthdate: requestData.birthdate,
                },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    updatePhoneNumber: async function (requestData) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/profile/update-phone-number",
                headers: {
                    Authorization: requestData.authToken,
                },
                params: {
                    userId: requestData.userId,
                },
                data: {
                    phoneNumber: requestData.phoneNumber,
                },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    updatePassword: async function (requestData) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/auth/update-password",
                headers: {
                    Authorization: requestData.authToken,
                },
                params: {
                    userId: requestData.userId,
                },
                data: {
                    oldPassword: requestData.oldPassword,
                    newPassword: requestData.newPassword,
                },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
    updateProfileImg: async function (requestData) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/profile/update-profile-img",
                headers: {
                    Authorization: requestData.authToken,
                },
                params: {
                    userId: requestData.userId,
                },
                data: {
                    imageUrl: requestData.imageUrl,
                },
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    },
};

export const {
    userProfile,
    updateProfileName,
    updateGender,
    updateBirthdate,
    updatePhoneNumber,
    updatePassword,
    updateProfileImg,
} = Requests;
