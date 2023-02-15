import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import Color from "../../../Components/Color";
import {
    Body,
    BodyS,
    Caption,
    HeadingM,
    HeadingS,
} from "../../../Components/Typography";
import { Amenity } from "./Amenity";
import {
    MaterialCommunityIcons,
    Ionicons,
    FontAwesome5,
} from "@expo/vector-icons";

function AmenityTitle(props) {
    const dispatch = useDispatch();

    return (
        <>
            {/* <AvailableFeatures title="Amenities" /> */}
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <HeadingS style={styles.titleText}>{props.title}</HeadingS>
                    <View style={styles.horizontalLine} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    titleText: {
        // marginLeft: 20,
        // marginTop: 20,
        fontWeight: "bold",
        color: Color.primary,
    },
    horizontalLine: {
        width: 30,
        height: 3,
        backgroundColor: Color.white,
        borderRadius: 10,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
    },
    container: {
        alignItems: "center",
        marginTop: 15,
    },
});

export { AmenityTitle };
