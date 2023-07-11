import React from "react";
import { StyleSheet, View } from "react-native";
import { HeadingS } from "../../Components/Typography";
import AuthScreen from "../../Layouts/AuthScreen";
import { InputText, InputPassword } from "../../Components/Inputs";
import { signIn } from "../../Api/Auth/Auth";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  logInReducer,
  passwordReducer,
  emailReducer,
  cleanAuthDataReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import * as SecureStore from "expo-secure-store";
import { NavigationProp } from "@react-navigation/native";
import { Button, Text } from "react-native-paper";
import Color from "../../Components/Color";
import { Feather } from "@expo/vector-icons";

interface SignInProps {
  navigation: NavigationProp<any>;
}

const SignIn: React.FC<SignInProps> = (props) => {
  const dispatch = useDispatch();

  // Seting states
  const [isLoading, setIsLoading] = React.useState(false);

  const { email, password } = useSelector((state: any) => {
    return state.auth;
  });

  // Input function for email entry
  const handleEmail = (email: string): void => {
    dispatch(emailReducer(email));
  };

  // Input function for password entry
  const handlePassword = (password: string): void => {
    dispatch(passwordReducer(password));

    return;
  };

  // Handling SingIn
  const handleSignIn = async () => {
    if (!email || !password) {
      dispatch(errorMsg("fill all fields"));

      return;
    }

    if (password.length < 6) {
      dispatch(errorMsg("password must have 6 charracters or more"));

      return;
    }

    setIsLoading(true);

    let response = await signIn({ email, password });

    if (response.access_token) {
      await SecureStore.setItemAsync("authToken", response.access_token);

      dispatch(
        logInReducer({
          authToken: response.access_token,
        })
      );

      dispatch(cleanAuthDataReducer());

      setIsLoading(false);

      return;
    }

    setIsLoading(false);

    dispatch(errorMsg(response.message));

    return;
  };

  // Navigate to sign up screen
  const handleSignUp = (): void => {
    dispatch(cleanAuthDataReducer());

    props.navigation.navigate("SignUp");

    return;
  };

  return (
    <>
      <AuthScreen>
        {/* <Logo /> */}

        <Text variant="titleLarge">Owner sign in </Text>

        <ErrorMsg />

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

        <View style={styles.forgotPasswordContainer}>
          {/* <TextButton action='forgot password' onPress={handleForgotPassword} /> */}
        </View>

        <Button
          mode="contained"
          onPress={handleSignIn}
          buttonColor={Color.primary}
          style={styles.buttonStyle}
          contentStyle={styles.buttonContent}
          loading={isLoading}
          icon={() => (
            <Feather name="arrow-right" size={14} color="white" />
          )}
        >
          Sign in
        </Button>

        <View style={styles.bottomQuestionContainer}>
          <Text variant="bodyMedium" style={styles.questionText}>
            Don't have acount?
          </Text>

          <Button
            mode="text"
            onPress={handleSignUp}
            textColor={Color.primary}
          >
            Sign up
          </Button>
        </View>
      </AuthScreen>
    </>
  );
};

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    width: 260,
    alignItems: "flex-end",
  },
  bottomQuestionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  questionText: {
    marginRight: 2,
  },
  buttonStyle: {
    width: "80%",
  },
  buttonContent: {
    flexDirection: "row-reverse",
  },
});

export default React.memo(SignIn);
