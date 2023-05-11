import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Body } from "../../Components/Typography";

function HelpType(props: any) {
    return (
        <>
            <TouchableOpacity onPress={props.onPress} activeOpacity={0.85}>
                <View style={styles.container}>
                    {props.children}
                    <Body style={styles.labelText}>{props.label}</Body>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft: 20,
        alignItems: "center",
        marginTop: 15,
        marginBottom: 10,
    },
    labelText: {
        marginLeft: 25,
    },
});

export { HelpType };
