import React from "react";
import { StyleSheet, View } from "react-native";
import AuthScreen from "../../Layouts/AuthScreen";
import { InputText, InputPassword } from "../../Components/Inputs";
import { signIn } from "../../Api/Auth/Auth";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  logInReducer,
  inputAuthReducer,
  cleanAuthDataReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import * as SecureStore from "expo-secure-store";
import { NavigationProp } from "@react-navigation/native";
import { RootState } from "../../Redux";
import { getVehicles } from "../../Api/Services/Backend/Vehicle";
import { postRoute } from "../../Api/Services/Backend/Route";
import { Button, Text } from "react-native-paper";
import Color from "../../Components/Color";
import { Feather } from "@expo/vector-icons";

interface SignInDriverProps {
  navigation: NavigationProp<any>;
}

const SignInDriver: React.FC<SignInDriverProps> = (props) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false);

  const { email, password, plateNumber } = useSelector(
    (state: RootState) => {
      return state.auth;
    }
  );

  const handleTextChange = (name: string, value: string): void => {
    dispatch(inputAuthReducer({ name, value }));
  };

  // Handling SingIn
  const handleSignIn = async () => {
    if (!plateNumber) {
      dispatch(errorMsg("Plate number field is blank"));

      return;
    }

    if (!email) {
      dispatch(errorMsg("Email field is blank"));

      return;
    }

    if (!password) {
      dispatch(errorMsg("Password field is blank"));

      return;
    }

    if (password.length < 6) {
      dispatch(errorMsg("password should have altleast 6 characters"));

      return;
    }

    setIsLoading(true);

    let response = await signIn({ email, password });

    let vehicle = await getVehicles(response.access_token, plateNumber);

    if (vehicle.length === 0) {
      dispatch(errorMsg("No vehicle with such registration"));
      setIsLoading(false);

      return;
    }

    if (response.access_token && vehicle.length > 0) {
      await postRoute(vehicle[0].id, response.access_token);

      await SecureStore.setItemAsync("authToken", response.access_token);

      dispatch(
        logInReducer({
          authToken: response.access_token,
        })
      );

      setIsLoading(false);

      return;
    }

    setIsLoading(false);

    dispatch(errorMsg("Failed to sign in"));

    return;
  };

  // Navigate to sign up screen
  const handleSignUp = () => {
    dispatch(cleanAuthDataReducer());

    props.navigation.navigate("SignUp");

    return;
  };

  return (
    <>
      <AuthScreen>
        <Text variant="titleLarge">Driver sign in</Text>

        <ErrorMsg />

        <InputText
          label="Plate number"
          value={plateNumber}
          onChangeText={(value) => {
            handleTextChange("plateNumber", value);
          }}
        />

        <InputText
          label="Email"
          value={email}
          onChangeText={(value) => {
            handleTextChange("email", value);
          }}
        />

        <InputPassword
          label="Password"
          value={password}
          onChangeText={(value) => {
            handleTextChange("password", value);
          }}
        />

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

export default React.memo(SignInDriver);
