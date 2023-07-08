import * as React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../Components/Color";
import { LogoutAlert } from "./Alert";
import { Button, Dialog, Portal, Text } from "react-native-paper";

function LogoutModal() {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.transparentContainer} />

        <LogoutAlert />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  transparentContainer: {
    backgroundColor: Color.black,
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.3,
  },
});

export { LogoutModal };
