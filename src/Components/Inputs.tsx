import React from "react";
import {
  StyleSheet,
  View,
  ViewStyle,
  KeyboardTypeOptions,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Body, BodyS } from "./Typography";
import Color from "./Color";
import { HeadingS } from "./Typography";
import { TextInput } from "react-native-paper";

interface Props {
  style?: ViewStyle;
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  maxLength?: number;
  placeholder?: string;
  multiline?: boolean;
  currency?: string;
  keyboardType?: KeyboardTypeOptions;
}

const inputs = {
  /* Input text */
  InputText: function ({
    label,
    onChangeText,
    style,
    maxLength,
    multiline,
    placeholder,
    value,
    keyboardType,
  }: Props) {
    // setting states
    const [isFocused, setIsFocused] = React.useState<boolean>(false);

    return (
      <>
        <View style={styles.container}>
          <View>
            <View
              style={{
                ...styles.inputContainer,
                // borderColor: isFocused ? Color.primary : Color.lightgray,
                // backgroundColor: isFocused ? Color.white : Color.lightgray,
                ...style,
              }}
            >
              <TextInput
                mode="outlined"
                label={`  ${label}`}
                placeholder={placeholder}
                outlineStyle={styles.inputOutline}
                maxLength={maxLength ? maxLength : 100}
                value={value}
                onChangeText={onChangeText}
                multiline={multiline}
                onFocus={(e) => {
                  setIsFocused(!isFocused);
                }}
                activeOutlineColor={Color.primary}
                onBlur={(e) => {
                  setIsFocused(!isFocused);
                }}
                keyboardType={keyboardType}
              />
            </View>
          </View>
        </View>
      </>
    );
  },
  /* Input number */
  InputNumber: function ({
    label,
    onChangeText,
    style,
    maxLength,
    multiline,
    placeholder,
    value,
  }: Props) {
    // setting states
    const [isFocused, setIsFocused] = React.useState(false);
    return (
      <>
        <View style={styles.container}>
          <View>
            <Body style={styles.inputTextLabel}>{label}</Body>
            <View
              style={{
                ...styles.inputContainer,
                ...style,
                borderWidth: 1.8,
                borderColor: isFocused ? Color.primary : Color.lightgray,
                backgroundColor: isFocused ? Color.white : Color.lightgray,
              }}
            >
              <TextInput
                placeholder={placeholder}
                style={styles.inputNumber}
                maxLength={maxLength ? maxLength : 100}
                value={value}
                onChangeText={onChangeText}
                keyboardType="number-pad"
                onFocus={(e) => {
                  setIsFocused(!isFocused);
                }}
                onBlur={(e) => {
                  setIsFocused(!isFocused);
                }}
              />
            </View>
          </View>
        </View>
      </>
    );
  },
  /* Input password */
  InputPassword: function ({
    label,
    onChangeText,
    style,
    maxLength,
    multiline,
    placeholder,
    value,
  }: Props) {
    // setting states
    const [hide, setHide] = React.useState(true);

    const handleShow = () => {
      setHide(!hide);
      return;
    };

    return (
      <>
        <View style={styles.container}>
          <View
            style={{
              ...styles.inputContainer,
              // borderColor: isFocused ? Color.primary : Color.lightgray,
              // backgroundColor: isFocused ? Color.white : Color.lightgray,
              ...style,
            }}
          >
            <TextInput
              placeholder={placeholder}
              outlineStyle={styles.inputOutline}
              label={label}
              mode="outlined"
              maxLength={maxLength ? maxLength : 100}
              value={value}
              // secureTextEntry
              secureTextEntry={hide}
              activeOutlineColor={Color.primary}
              onChangeText={onChangeText}
              right={
                <TextInput.Icon
                  icon={() =>
                    hide ? (
                      <Ionicons
                        name="eye-outline"
                        size={24}
                        color="black"
                        onPress={handleShow}
                      />
                    ) : (
                      <Ionicons
                        name="eye-off-outline"
                        size={24}
                        color="black"
                        onPress={handleShow}
                      />
                    )
                  }
                />
              }
            />
          </View>
        </View>
      </>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: "90%",
    // backgroundColor: Color.lightgray,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    // paddingVertical: 10,
    aspectRatio: 10 / 1.6,
    justifyContent: "center",
  },
  inputPasswordText: {
    borderRadius: 50,
  },
  inputText: {
    fontSize: 16,
    letterSpacing: 0.5,
  },
  inputTextLabel: {
    color: Color.dimblack,
    marginBottom: 2,
    // fontWeight: "bold",
    marginLeft: 5,
    // textTransform: "capitalize",
  },
  inputNumber: {
    fontSize: 24,
    letterSpacing: 0.5,
  },
  inputPasswordContainer: {
    width: "100%",
    aspectRatio: 10 / 1.6,
    flexDirection: "row",
    alignItems: "center",
  },
  inputMoneyContainer: {
    backgroundColor: Color.lightgray,
    width: 240,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inputMoney: {
    fontSize: 24,
    letterSpacing: 0.5,
    width: "75%",
    height: "100%",
  },
  currencyText: {
    marginLeft: 5,
    marginRight: 5,
    width: "15%",
    color: Color.dimblack,
    textTransform: "uppercase",
  },
  eyeIconContainer: {
    // backgroundColor: Color.lightgray,
    width: "13%",
    marginRight: 10,
    aspectRatio: 10 / 10,
    alignItems: "center",
    justifyContent: "center",
  },
  inputOutline: {
    borderRadius: 50,
  },
});

export const { InputNumber, InputPassword, InputText } = inputs;
