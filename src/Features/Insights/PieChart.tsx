import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Color from "../../Components/Color";
import {
    Body,
    HeadingS,
    HeadingM,
    BodyS,
    HeadingL,
} from "../../Components/Typography";
import { addComma } from "../../Helpers/StringFormater";
import {
    MaterialCommunityIcons,
    Ionicons,
    AntDesign,
} from "@expo/vector-icons";
import { ProgressChart, LineChart } from "react-native-chart-kit";

function PieChart(props: any) {
    const data = {
        labels: ["Swim"], // optional
        data: [0.4],
    };

    return (
        <>
            <View style={styles.rowContainer}>
                <View style={styles.container}>{/* <Body></Body> */}</View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.lightgray,
        width: "90%",
        paddingLeft: 15,
        aspectRatio: 10 / 4.5,
        borderRadius: 5,
        padding: 15,
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    circleContainer: {
        borderWidth: 1.5,
        width: 60,
        aspectRatio: 10 / 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        borderColor: Color.grey,
        marginRight: 25,
    },
    rowContainer: {
        // flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
    },
    labelText: {
        color: Color.dimblack,
        // fontWeight: "bold",
    },
    infoContainer: {},
    instantText: {
        color: Color.dimblack,
    },
    detailContainer: {
        alignItems: "center",
    },
});

export { PieChart };
