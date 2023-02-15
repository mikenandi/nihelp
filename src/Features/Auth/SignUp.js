import React from "react";
import { StyleSheet, View } from "react-native";
import { HeadingM, Body } from "../../Components/Typography";
import Color from "../../Components/Color";
import AuthScreen from "../../Layouts/AuthScreen";
import { InputText, InputPassword } from "../../Components/Inputs";
import { ButtonL, TextButton } from "../../Components/Buttons";
import { useDispatch } from "react-redux";
import { signUp } from "../../Api/Auth/Auth";
import {
    resetConfirmEmailFrom,
    saveDataFromSignUp,
    saveEmail,
    saveFullnameReducer,
    savePassword,
} from "../../Redux/Features/Auth/AuthSlice";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import Loader from "../../Components/Loader";
import { useSelector } from "react-redux";
import { isEmail } from "../../Helpers/EmailCheck";
import { Logo } from "./Logo";

function SignUp(props) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(false);

    const { email, fullname, password } = useSelector((state) => {
        return state.auth;
    });

    const handleEmail = (email) => {
        dispatch(saveEmail(email));

        return;
    };

    const handleFullname = (fullname) => {
        dispatch(saveFullnameReducer(fullname));

        return;
    };

    const handlePassword = (password) => {
        dispatch(savePassword(password));

        return;
    };

    // Navigating to sign in screen
    const handleSignIn = () => {
        props.navigation.navigate("SignIn");

        return;
    };

    // Navigating to confirm email screen
    const handleSignUp = async () => {
        if (!email || !password) {
            dispatch(errorMsg("fill all fields"));

            return;
        }

        if (!isEmail(email)) {
            dispatch(errorMsg("Invalid email address"));

            return;
        }

        if (password.length < 6) {
            dispatch(errorMsg("password should have at least 6 charracters"));

            return;
        }

        setIsLoading(true);

        dispatch(resetConfirmEmailFrom());

        let fullnameArray = fullname.split(" ", 2);

        let data = {
            email,
            password,
            firstname: fullnameArray[0],
            lastname: fullnameArray[1],
        };

        let response = await signUp(data);

        if (response.success) {
            dispatch(saveDataFromSignUp(response.data));
            dispatch(resetConfirmEmailFrom());
            props.navigation.navigate("ConfirmEmail");
            setIsLoading(false);
            return;
        }

        dispatch(errorMsg(response.message));

        setIsLoading(false);

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
                <Logo />

                <ErrorMsg />

                <InputText
                    label="Full name"
                    value={fullname}
                    onChangeText={handleFullname}
                />

                <InputText
                    label="Email"
                    value={email}
                    onChangeText={handleEmail}
                />

                <InputPassword
                    label="Password"
                    value={password}
                    onChangeText={handlePassword}
                />

                <ButtonL action="sign up" onPress={handleSignUp} />

                <View style={styles.bottomQuestionContainer}>
                    <Body style={styles.questionText}>Have acount?</Body>
                    <TextButton action="sign in" onPress={handleSignIn} />
                </View>
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
        marginBottom: 5,
    },
    questionText: {
        marginTop: 15,
        marginRight: 5,
    },
});

export default React.memo(SignUp);
