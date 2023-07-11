import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Color from "./Color";
import { HeadingS } from "./Typography";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ErrorMsg } from "./ErrorMsg";
import { Appbar, Text } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../Redux";

interface Props {
  title: string;
  handleBack: () => void;
}

function ModalNavBack({ title, handleBack }: Props) {
  const errorMsg = useSelector((state: RootState) => state.errorMsg.error);

  return (
    <>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction color={Color.white} onPress={handleBack} />
        <Appbar.Content color={Color.white} title={title} />
      </Appbar.Header>

      {errorMsg && (
        <View style={styles.errorMsgContainer}>
          <ErrorMsg />
        </View>
      )}
    </>
  );
}

function ModalNavBackWhite({ title, handleBack }: Props) {
  return (
    <>
      <View style={styles.containerWhite}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.iconBtn}
          onPress={handleBack}
        >
          <MaterialIcons name="close" size={28} color={Color.dimblack} />
        </TouchableOpacity>
        <HeadingS numberOfLines={1} style={styles.titleTxt}>
          {title}
        </HeadingS>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  containerWhite: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  icon: {},
  iconBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.lightgray,
    marginRight: 10,
  },
  iconBtnPrimary: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.primary,
    marginRight: 10,
  },
  titleTxt: {
    color: Color.white,
    width: "70%",
  },
  titleTxtPrimary: {
    color: Color.white,
    width: "70%",
  },
  errorMsgContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  appbar: {
    backgroundColor: Color.primary,
  },
});

export { ModalNavBack, ModalNavBackWhite };
