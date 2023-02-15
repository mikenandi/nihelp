import React from "react";
import { StyleSheet, View } from "react-native";
import { HeadingM, Body } from "../../Components/Typography";
import AuthScreen from "../../Layouts/AuthScreen";
import { ButtonL, TextButton } from "../../Components/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { deleteCode } from "../../Redux/Components/InputCode";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { confirmEmail, resendVerificationCode } from "../../Api/Auth/Auth";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signUpReducer } from "../../Redux/Features/Auth/AuthSlice";
import Loader from "../../Components/Loader";
import { NumberKeyBoard } from "../../Components/NumberKeyboard";
import { VerificationCodeInput } from "../../Components/VerificationCodeInput";

function ConfirmEmail(props) {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(false);

    // Getting from which screen it was from.
    const fromForgotPassword = useSelector((state) => {
        return state.auth.fromForgotPassword;
    });

    const authToken = useSelector((state) => {
        return state.auth.authToken;
    });

    const userId = useSelector((state) => {
        return state.auth.userId;
    });

    const email = useSelector((state) => {
        return state.auth.email;
    });

    const verificationCode = useSelector((state) => {
        return state.codeInput.verificationCode;
    });

    // Navigating to recover password screen
    const handleNext = async () => {
        if (verificationCode.length < 5) {
            dispatch(errorMsg("incomplete verification code"));

            return;
        }

        setIsLoading(true);

        let data = {
            verificationCode: verificationCode,
            email: email,
        };

        // sending https request
        let response = await confirmEmail(data);

        if (response.success && fromForgotPassword) {
            props.navigation.navigate("RecoverPassword");
            dispatch(deleteCode());
            return;
        }

        if (response.success) {
            await SecureStore.setItemAsync("authToken", authToken);
            await AsyncStorage.setItem("userId", userId);
            dispatch(deleteCode());
            dispatch(signUpReducer());

            setIsLoading(false);

            return;
        }

        // otherwise error occured
        setIsLoading(false);
        dispatch(errorMsg(response.message));

        // going to home screen
        return;
    };

    const handleResendCode = async () => {
        let data = {
            email,
        };

        setIsLoading(true);

        let response = await resendVerificationCode(data);

        if (response.success) {
            setIsLoading(false);
            return;
        }

        setIsLoading(false);
        dispatch(errorMsg("Resending verification code failed"));

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
                <HeadingM>Enter code</HeadingM>

                <ErrorMsg />

                <VerificationCodeInput />

                <ButtonL action="verify email" onPress={handleNext} />

                <View style={styles.bottomQuestionContainer}>
                    <Body style={styles.questionText}>
                        Didn't receive code?
                    </Body>
                    <TextButton
                        action="Resend code"
                        onPress={handleResendCode}
                    />
                </View>
                <NumberKeyBoard />
            </AuthScreen>
        </>
    );
}

const styles = StyleSheet.create({
    forgotPasswordContainer: {
        width: 260,
        alignItems: "flex-end",
    },
    bottomQuestionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 180,
        marginTop: 20,
    },
    questionText: {
        marginTop: 15,
        marginRight: 5,
    },
});

export default React.memo(ConfirmEmail);
