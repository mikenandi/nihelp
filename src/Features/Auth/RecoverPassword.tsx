import React from "react";
import { StyleSheet } from "react-native";
import { HeadingM } from "../../Components/Typography";
import Color from "../../Components/Color";
import AuthScreen from "../../Layouts/AuthScreen";
import { InputPassword } from "../../Components/Inputs";
import { ButtonL } from "../../Components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { recoverPassword } from "../../Api/Auth/Auth";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import {
    // @ts-expect-error TS(2614): Module '"../../Redux/Features/Auth/AuthSlice"' has... Remove this comment to see the full error message
    saveConfirmPassword,
    // @ts-expect-error TS(2614): Module '"../../Redux/Features/Auth/AuthSlice"' has... Remove this comment to see the full error message
    saveEmail,
    // @ts-expect-error TS(2614): Module '"../../Redux/Features/Auth/AuthSlice"' has... Remove this comment to see the full error message
    savePassword,
} from "../../Redux/Features/Auth/AuthSlice";
import Loader from "../../Components/Loader";

function RecoverPassword(props: any) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(false);

    const password = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.auth.password;
    });

    const confirmPassword = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.auth.confirmPassword;
    });

    const userEmail = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.auth.email;
    });

    const handlePassword = (password: any) => {
        dispatch(savePassword(password));

        return;
    };

    const handleConfirmPassword = (password: any) => {
        dispatch(saveConfirmPassword(password));

        return;
    };

    const handleChangePassword = async () => {
        if (!password || !confirmPassword) {
            dispatch(errorMsg("fill all fields"));

            return;
        }

        if (password.lenght < 6) {
            dispatch(errorMsg("password must have 6 characters"));

            return;
        }

        if (password !== confirmPassword) {
            dispatch(errorMsg("passwords do not match"));

            return;
        }

        setIsLoading(true);

        let data = {
            email: userEmail,
            newPassword: password,
        };

        let response = await recoverPassword(data);

        if (response.success) {
            dispatch(savePassword(""));
            dispatch(saveConfirmPassword(""));
            dispatch(saveEmail(""));

            props.navigation.navigate("SignIn");

            setIsLoading(false);

            return;
        }

        setIsLoading(false);

        dispatch(errorMsg("Failed to update your password"));

        return;
    };

    if (isLoading) {
        return (
            <>
                <Loader />
            </>
        );
    }

    return (
        <>
            <AuthScreen>
                <HeadingM>Recover password </HeadingM>

                <ErrorMsg errorMsg={errorMsg} />

                <InputPassword
                    label="new password"
                    value={password}
                    onChangeText={handlePassword}
                />

                <InputPassword
                    label="confirm password"
                    value={confirmPassword}
                    onChangeText={handleConfirmPassword}
                />

                <ButtonL
                    action="change password"
                    onPress={handleChangePassword}
                />
            </AuthScreen>
        </>
    );
}

const styles = StyleSheet.create({});

export default React.memo(RecoverPassword);
