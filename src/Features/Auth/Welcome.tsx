import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { HeadingL, HeadingM, HeadingS } from "../../Components/Typography";
import Color from "../../Components/Color";
import { ButtonL, OutlineButtonL } from "../../Components/Buttons";
import { useDispatch } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module '../../../assets/svg/welcome_la... Remove this comment to see the full error message
import WelcomeSvg from "../../../assets/svg/welcome_landlord.svg";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { BottomSheet, PostQn } from "../../Components/PostQn";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Button, Text } from "react-native-paper";

function Welcome(props: any) {
  const dispatch = useDispatch();

  // Navigate to sign in screen
  const handleSignIn = (): void => {
    props.navigation.navigate("SignIn");
  };

  // Navigate to sign up screen
  const handleSignUp = (): void => {
    props.navigation.navigate("SignUp");
  };

  const handleSignInDriver = (): void => {
    props.navigation.navigate("SignInDriver");
  };

  return (
    <>
      <StatusBar backgroundColor={Color.primary} />

      <View style={styles.container}>
        <View style={styles.WelcomeContainer}>
          {/* <MaterialCommunityIcons
						name="tow-truck"
						size={64}
						color={Color.warning}
					/> */}

          {/* <Entypo name="scribd" size={60} color={Color.warning} /> */}
          <MaterialCommunityIcons
            name="car-brake-alert"
            size={80}
            color={Color.white}
          />
          <Text variant="headlineSmall" style={styles.descText}>
            Breakdown report app
          </Text>
        </View>
        <BottomSheet />

        <View style={styles.buttonsContainer}>
          <Button
            mode="contained"
            onPress={handleSignUp}
            buttonColor={Color.primary}
            style={styles.buttonStyle}
            icon={() => (
              <FontAwesome name="arrow-right" size={16} color="white" />
            )}
            contentStyle={styles.buttonContent}
          >
            Create Account
          </Button>

          <Button
            mode="outlined"
            onPress={handleSignIn}
            style={styles.buttonStyle}
            textColor={Color.primary}
          >
            Sign in as Owner
          </Button>

          <Button
            mode="outlined"
            onPress={handleSignInDriver}
            textColor={Color.primary}
            style={styles.buttonStyle}
          >
            Sign in as Driver
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.white,
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
  bodyText: {
    color: Color.dimblack,
    fontWeight: "bold",
    marginTop: 10,
  },
  descText: {
    color: Color.white,
    // fontWeight: "bold",
    // fontSize: 14,
    // backgroundColor: Color.lightblue,
    marginHorizontal: 20,
    // textTransform: "uppercase",
  },
  buttonsContainer: {
    width: "80%",
    position: "absolute",
    bottom: 90,
  },
  WelcomeContainer: {
    width: "100%",
    backgroundColor: Color.primary,
    // borderBottomEndRadius: 75,
    paddingBottom: 20,
    alignItems: "center",
    aspectRatio: 10 / 7.5,
    justifyContent: "center",
  },
  getstartedText: {
    color: Color.white,
    // fontWeight: "bold",
    fontFamily: "poppins",
  },
  dot: {
    color: Color.warning,
    fontSize: 64,
  },
  buttonStyle: { marginTop: 16 },
  buttonContent: {
    flexDirection: "row-reverse",
  },
});

export default React.memo(Welcome);
