import React from "react";
import { StyleSheet, View } from "react-native";
import { HeadingS, Body, Caption } from "../../Components/Typography";
import Color from "../../Components/Color";

function Notification(props) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.dot} />
                <View>
                    <Body style={styles.msgText}>
                        3 New rental request for Property name
                    </Body>
                    <Caption style={styles.timeText}>3 hrs ago</Caption>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: Color.lightgray,
        padding: 10,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        aspectRatio: 10 / 2.5,
        marginTop: 10,
    },
    timeText: {
        color: Color.dimblack,
        marginTop: 5,
    },
    dot: {
        width: 10,
        aspectRatio: 1 / 1,
        backgroundColor: Color.primary,
        borderRadius: 25,
        marginRight: 15,
    },
    msgText: {
        // fontWeight: "bold",
        // fontSize: 18,
        width: "80%",
        // backgroundColor: Color.lightred,
    },
});

export { Notification };
