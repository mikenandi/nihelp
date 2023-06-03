import React from "react";
import { StyleSheet, View } from "react-native";
import { Body, HeadingS } from "../../Components/Typography";
import AuthScreen from "../../Layouts/AuthScreen";
import { InputText, InputPassword } from "../../Components/Inputs";
import { ButtonL, TextButton } from "../../Components/Buttons";
import { useDispatch } from "react-redux";
import {
  cleanSignupDataReducer,
  emailReducer,
  licenseNoReducer,
  logInReducer,
  nameReducer,
  passwordReducer,
  phoneNumberReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { useSelector } from "react-redux";
import { NavigationProp } from "@react-navigation/native";
import { DropdownInput } from "../../Components/DropdownInput";
import { RootState } from "../../Redux";
import { signUp } from "../../Api/Auth/Auth";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import { isEmail } from "../../Helpers/EmailCheck";
import Loader from "../../Components/Loader";
import * as SecureStore from "expo-secure-store";

type SignUpProps = {
  navigation: NavigationProp<any>;
};

const SignUp: React.FC<SignUpProps> = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { name, email, password, userType, licenseNo, phoneNumber } =
    useSelector((state: RootState) => {
      return state.auth;
    });

  const handleSignIn = (): void => {
    dispatch(cleanSignupDataReducer());

    props.navigation.navigate("SignIn");
  };

  const handleDriverSignup = (): void => {
    dispatch(cleanSignupDataReducer());

    props.navigation.navigate("SignInDriver");
  };

  const handlePassword = (password: string): void => {
    dispatch(passwordReducer(password));
  };

  const handleName = (name: string): void => {
    dispatch(nameReducer(name));
  };

  const handleEmail = (email: string): void => {
    dispatch(emailReducer(email));
  };

  const handleLicenseNo = (licenseNo: string): void => {
    dispatch(licenseNoReducer(licenseNo));
  };

  const handlePhoneNumber = (phoneNumber: string): void => {
    dispatch(phoneNumberReducer(phoneNumber));
  };

  const checkFields = (
    name: string,
    email: string,
    password: string,
    userType: string,
    phoneNumber: string
  ): string | null => {
    if (!name) {
      return "Name field is blank.";
    }

    if (!email) {
      return "Email field is blank.";
    }
    if (!password) {
      return "Password field is blank.";
    }
    if (!userType) {
      return "User type field is blank.";
    }
    if (!phoneNumber) {
      return "Phone number field is blank.";
    }

    return null;
  };

  const handleSignup = async () => {
    try {
      let isAnyFieldBlank = checkFields(
        name,
        email,
        password,
        userType,
        phoneNumber
      );

      if (isAnyFieldBlank) {
        dispatch(errorMsg(isAnyFieldBlank));

        return;
      }

      if (phoneNumber.length !== 10) {
        dispatch(errorMsg("phone number should have 10 characters"));

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

      let response: any = await signUp({
        name,
        email,
        phoneNumber,
        licenseNo,
        password,
        isOwner: userType === "owner" ? true : false,
      });

      if (response.access_token) {
        if (userType !== "owner") {
          handleDriverSignup();

          return;
        }

        await SecureStore.setItemAsync("authToken", response.access_token);

        dispatch(logInReducer({ authToken: response.access_token }));

        dispatch(cleanSignupDataReducer());

        return;
      }

      dispatch(errorMsg(response.message));

      setIsLoading(false);

      return;
    } catch (error) {
      console.log(error);
    }
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
        <HeadingS>Create account</HeadingS>

        <ErrorMsg />

        <InputText label="name" value={name} onChangeText={handleName} />

        <DropdownInput />

        {userType === "driver" && (
          <InputText
            label="license"
            value={licenseNo}
            onChangeText={handleLicenseNo}
          />
        )}

        <InputText
          label="phone"
          value={phoneNumber}
          keyboardType="number-pad"
          onChangeText={handlePhoneNumber}
          maxLength={10}
        />

        <InputText
          label="email"
          value={email}
          onChangeText={handleEmail}
        />

        <InputPassword
          label="Password"
          value={password}
          onChangeText={handlePassword}
        />

        <ButtonL action="sign up" onPress={handleSignup} />

        <View style={styles.bottomQuestionContainer}>
          <Body style={styles.questionText}>Have account?</Body>
          <TextButton action="sign in" onPress={handleSignIn} />
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
    marginBottom: 5,
  },
  questionText: {
    marginTop: 15,
    marginRight: 5,
  },
});

export default React.memo(SignUp);
