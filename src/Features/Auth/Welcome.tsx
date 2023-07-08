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
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native-paper";

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

        <ButtonL
          action="Register"
          onPress={handleSignUp}
          style={styles.buttonAbsolute}
        />

        <OutlineButtonL
          action="Sign in as owner"
          onPress={handleSignIn}
          style={styles.buttonAbsolute1}
        />

        <OutlineButtonL
          action="Sign in as Driver"
          onPress={handleSignInDriver}
          style={styles.buttonAbsolute2}
        />
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
  buttonAbsolute: {
    position: "absolute",
    bottom: 240,
  },
  buttonAbsolute1: {
    position: "absolute",
    bottom: 160,
  },
  buttonAbsolute2: {
    position: "absolute",
    bottom: 80,
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
});

export default React.memo(Welcome);
