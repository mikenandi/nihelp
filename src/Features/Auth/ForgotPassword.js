import React from "react";
import { StyleSheet } from "react-native";
import { HeadingM } from "../../Components/Typography";
import Color from "../../Components/Color";
import AuthScreen from "../../Layouts/AuthScreen";
import { InputText } from "../../Components/Inputs";
import { ButtonL } from "../../Components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../Api/Auth/Auth";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { isEmail } from "../../Helpers/EmailCheck";
import {
    saveEmail,
    setConfirmEmailFromForgotePassword,
} from "../../Redux/Features/Auth/AuthSlice";
import Loader from "../../Components/Loader";

function ForgotPassword(props) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(false);
    const email = useSelector((state) => {
        return state.auth.email;
    });

    // Handling input
    const handleEmail = (email) => {
        dispatch(saveEmail(email));

        return;
    };

    // Navigating to confirm email screen
    const handleConfirmEmail = async () => {
        if (!email) {
            dispatch(errorMsg("fill email"));

            return;
        }

        if (!isEmail(email)) {
            dispatch(errorMsg("invalid email"));

            return;
        }

        setIsLoading(true);

        let data = {
            sendTo: email,
            verificationFor: "email",
        };

        let response = await forgotPassword(data);

        if (response.success) {
            dispatch(setConfirmEmailFromForgotePassword());

            props.navigation.navigate("ConfirmEmail");

            setIsLoading(false);

            return;
        }

        setIsLoading(false);

        dispatch(errorMsg(response.message));

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
                <HeadingM>Enter your email</HeadingM>

                <ErrorMsg />

                <InputText
                    label="email"
                    value={email}
                    onChangeText={handleEmail}
                />

                <ButtonL
                    action="send verification code"
                    onPress={handleConfirmEmail}
                />
            </AuthScreen>
        </>
    );
}

const styles = StyleSheet.create({});

export default React.memo(ForgotPassword);
