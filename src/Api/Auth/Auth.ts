import { axios } from "./Axios";

const Requests = {
    signIn: async function (data: any) {
        try {
            let response = await axios({
                method: "POST",
                url: "/api/v1/auth/signin",
                data: data,
            });

            return response.data;
        } catch (error) {
            // console.log(error.response);
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            return error.response.data;
        }
    },
    signUp: async function (data: any) {
        try {
            let response = await axios({
                method: "POST",
                url: "/api/v1/auth/signup",
                data: data,
            });

            return response.data;
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            return error.response.data;
        }
    },
    confirmEmail: async function (data: any) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/auth/confirm-email",
                data: data,
            });

            return response.data;
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            return error.response.data;
        }
    },
    forgotPassword: async function (data: any) {
        try {
            let response = await axios({
                method: "POST",
                url: "/api/v1/auth/send-verification-code",
                data: data,
            });

            return response.data;
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            return error.response.data;
        }
    },
    recoverPassword: async function (data: any) {
        try {
            let response = await axios({
                method: "PUT",
                url: "/api/v1/auth/recover-password",
                data: data,
            });

            return response.data;
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            return error.response.data;
        }
    },
    resendVerificationCode: async function (data: any) {
        try {
            let response = await axios({
                method: "POST",
                url: "/api/v1/auth/resend-verification-code",
                data: data,
            });

            return response.data;
        } catch (error) {
            // @ts-expect-error TS(2571): Object is of type 'unknown'.
            return error.response.data;
        }
    },
};

export const {
    signIn,
    signUp,
    forgotPassword,
    recoverPassword,
    confirmEmail,
    resendVerificationCode,
} = Requests;
