import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Color from "./Color";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux";
import { inputAuthReducer } from "../Redux/Features/Auth/AuthSlice";

const DropdownInput: React.FC = () => {
  const dispatch = useDispatch();

  const userType: string = useSelector(
    (state: RootState) => {
      return state.auth.userType;
    }
  );

  const handleChange = (value: string): void => {
    dispatch(
      inputAuthReducer({
        name: "userType",
        value,
      })
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Picker
          selectedValue={userType}
          onValueChange={handleChange}
        >
          <Picker.Item
            label="Register as"
            value=""
            enabled={true}
            style={styles.labelText}
          />
          <Picker.Item label="Driver" value="driver" />
          <Picker.Item label="Owner" value="owner" />
        </Picker>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
    width: "80%",
    borderRadius: 100,
    marginTop: 10,
    borderWidth: 1,
    borderColor: Color.dimblack,
    height: 50,
  },
  labelText: {
    color: Color.dimblack,
  },
});

export { DropdownInput };
