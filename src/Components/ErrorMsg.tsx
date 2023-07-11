import React from "react";
import { StyleSheet } from "react-native";
import { Body } from "./Typography";
import Color from "./Color";
import { useDispatch, useSelector } from "react-redux";
import { errorMsg } from "../Redux/Components/ErrorMsgSlice";
import { RootState } from "../Redux";
import { Text } from "react-native-paper";

const ErrorMsg: React.FC = () => {
  const dispatch = useDispatch();

  const msg: string = useSelector((state: RootState) => {
    return state.errorMsg.error;
  });

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(errorMsg(""));
    }, 7000);
  }, [msg]);

  return (
    <>
      {!!msg && (
        <Text variant="bodyLarge" style={styles.errorMsg}>
          {msg}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorMsg: {
    color: Color.error,
    marginTop: 6,
    width: "80%",
    padding: 4,
    fontWeight: "bold",
  },
});

export { ErrorMsg };
