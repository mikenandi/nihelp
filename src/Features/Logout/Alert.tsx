import * as React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../Components/Color";
import { HeadingS } from "../../Components/Typography";
import { useDispatch } from "react-redux";
import { Card } from "../../Components/Card";
import {
  cleanAuthDataReducer,
  logOutReducer,
} from "../../Redux/Features/Auth/AuthSlice";
import { logoutVisibleReducer } from "../../Redux/Features/Logout/LogoutModalSlice";
import * as SecureStore from "expo-secure-store";
import { Button } from "react-native-paper";

const LogoutAlert: React.FC = () => {
  const dispatch = useDispatch();

  /* Loging out */
  const handleConfirm = async () => {
    /* Delete token and userId */
    await SecureStore.deleteItemAsync("authToken");

    dispatch(logOutReducer());

    dispatch(logoutVisibleReducer());

    dispatch(cleanAuthDataReducer());

    return;
  };

  const handleCancel = () => {
    dispatch(logoutVisibleReducer());

    return;
  };

  return (
    <>
      <Card style={styles.container}>
        <HeadingS style={styles.titleText}>
          Are you sure want to sign out ?
        </HeadingS>

        {/* <Body style={styles.bodyText}>
          Are you sure want to sign out ?
        </Body> */}

        <View style={styles.buttonsAlignContainer}>
          <View style={styles.buttonsContainer}>
            <Button
              onPress={handleCancel}
              mode="text"
              textColor={Color.primary}
            >
              Nope
            </Button>

            <Button
              onPress={handleConfirm}
              mode="elevated"
              textColor={Color.primary}
            >
              Yes, sure
            </Button>
          </View>
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    width: "80%",
    borderRadius: 20,
    padding: 15,
    aspectRatio: 10 / 3.5,
  },
  titleText: {
    color: Color.dimblack,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonsAlignContainer: {
    alignItems: "flex-end",
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  noBtn: {
    color: Color.dimblack,
    // fontWeight: "normal",
  },
  bodyText: {
    color: Color.dimblack,
    fontWeight: "bold",
  },
});

export { LogoutAlert };
