import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import { ButtonText, Body } from "./Typography";
import Color from "./Color";
import { Button } from "react-native-paper";

interface Props {
  onPress?: () => void;
  style?: ViewStyle | TextStyle;
  action?: string;
  textStyle?: TextStyle;
}

const buttons = {
  /* Large Buton */
  ButtonL: function (props: Props) {
    return (
      <>
        <Button
          mode="contained"
          buttonColor={Color.primary}
          style={{ ...styles.buttonLContainer, ...props.style }}
          uppercase
          onPress={props.onPress}
        >
          {props.action}
        </Button>
      </>
    );
  },
  /** Outlined Large Button */
  OutlineButtonL: function (props: Props) {
    return (
      <>
        <Button
          mode="elevated"
          style={{ ...styles.outlineButtonLContainer, ...props.style }}
          uppercase
          onPress={props.onPress}
          textColor={Color.primary}
        >
          {props.action}
        </Button>
      </>
    );
  },
  /* Small Button */
  ButtonS: function (props: Props) {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onPress}
          style={{
            ...styles.buttonSContainer,
            ...props.style,
          }}
        >
          <ButtonText style={styles.buttonText}>{props.action}</ButtonText>
        </TouchableOpacity>
      </>
    );
  },
  /* Outline Small Button */
  OutlineButtonS: function (props: Props) {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onPress}
          style={{
            ...styles.outlineButtonSContainer,
            ...props.style,
          }}
        >
          <ButtonText
            style={{ ...styles.outlineText, ...props.textStyle }}
          >
            {props.action}
          </ButtonText>
        </TouchableOpacity>
      </>
    );
  },
  /** Button of Medium size */
  ButtonM: function (props: Props) {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onPress}
          style={{
            ...styles.buttonMContainer,
            ...props.style,
          }}
        >
          <ButtonText style={styles.buttonText}>{props.action}</ButtonText>
        </TouchableOpacity>
      </>
    );
  },
  /** Outlined Medium Button */
  OutlineButtonM: function (props: Props) {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onPress}
          style={{
            ...styles.outlineButtonMContainer,
            ...props.style,
          }}
        >
          <ButtonText style={styles.outlineText}>
            {props.action}
          </ButtonText>
        </TouchableOpacity>
      </>
    );
  },
  /** Text Button */
  TextButton: function (props: Props) {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onPress}
          style={styles.textButtonContainer}
        >
          <Body
            style={{
              ...styles.textButtonText,
              ...props.style,
            }}
          >
            {props.action}
          </Body>
        </TouchableOpacity>
      </>
    );
  },
};

const styles = StyleSheet.create({
  buttonLContainer: {
    width: "80%",
    aspectRatio: 10 / 1.6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary,
    marginTop: 10,
    borderRadius: 30,
  },
  outlineButtonLContainer: {
    width: "80%",
    aspectRatio: 10 / 1.6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 30,
  },
  buttonSContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary,
    borderRadius: 30,
    alignSelf: "flex-start",
  },
  outlineButtonSContainer: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.primary,
    alignSelf: "flex-start",
  },
  textButtonContainer: {
    marginTop: 15,
  },
  outlineText: {
    color: Color.primary,
    fontWeight: "bold",
  },
  buttonText: {
    color: Color.white,
    fontWeight: "bold",
  },
  textButtonText: {
    color: Color.primary,
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonMContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary,
    borderRadius: 30,
    alignSelf: "flex-start",
  },
  outlineButtonMContainer: {
    paddingVertical: 9,
    paddingHorizontal: 29,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Color.primary,
    alignSelf: "flex-start",
  },
});

export const {
  ButtonL,
  ButtonS,
  TextButton,
  OutlineButtonL,
  OutlineButtonS,
  ButtonM,
  OutlineButtonM,
} = buttons;
