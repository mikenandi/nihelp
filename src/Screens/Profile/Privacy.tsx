import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ModalScreen } from "../../Layouts/ModalScreen";
import { ModalNavBack } from "../../Components/ModalNavBack";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux";
import {
  cleanAuthDataReducer,
  inputAuthReducer,
  logOutReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import { InputPassword } from "../../Components/Inputs";
import {
  deleteUser,
  updateProfile,
} from "../../Api/Services/Backend/Profile";
import { privacyProfileVisibleReducer } from "../../Redux/Features/Profile/ProfileModal";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import Color from "../../Components/Color";
import * as SecureStorage from "expo-secure-store";
import { Button } from "react-native-paper";

const Privacy: React.FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { password, authToken } = useSelector((state: RootState) => {
    return state.auth;
  });

  const handleBack = (): void => {
    dispatch(inputAuthReducer({ name: "password", value: "" }));
    dispatch(privacyProfileVisibleReducer());
  };

  const handleEdit = async (): Promise<void> => {
    if (password.length < 6) {
      dispatch(
        errorMsg("password length should have greater than 6 chars")
      );
      return;
    }

    setIsLoading(true);

    let response = await updateProfile(
      {
        password,
      },
      authToken
    );

    setIsLoading(false);

    handleBack();
  };

  const handleDelete = async (): Promise<void> => {
    let response = await deleteUser(authToken);

    await SecureStorage.deleteItemAsync("authToken");

    dispatch(cleanAuthDataReducer());

    dispatch(logOutReducer());
  };

  return (
    <>
      <ModalScreen>
        <ModalNavBack title="Privacy" handleBack={handleBack} />

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <InputPassword
            label="Change Password"
            value={password}
            onChangeText={(password) =>
              dispatch(
                inputAuthReducer({ name: "password", value: password })
              )
            }
          />

          <Button
            mode="contained"
            buttonColor={Color.primary}
            style={styles.btn}
            onPress={handleEdit}
            loading={isLoading}
          >
            Change password
          </Button>

          <Button
            mode="outlined"
            icon="delete"
            textColor={Color.error}
            onPress={handleDelete}
            style={styles.btn}
          >
            Delete account
          </Button>
        </ScrollView>
      </ModalScreen>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
  },
  btn: {
    width: "80%",
    marginTop: 30,
  },
  deleteText: {
    color: Color.error,
    fontWeight: "bold",
  },
});

export { Privacy };
