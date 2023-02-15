import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../../Components/Color";
import {
    Body,
    BodyS,
    Caption,
    HeadingM,
    HeadingS,
} from "../../../Components/Typography";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { addComma } from "../../../Helpers/StringFormater";

function TopComp(props) {
    const dispatch = useDispatch();

    const { rentPerMonth, propertyType, floorType, roomCount, roomType } =
        useSelector((state) => {
            return state.properties.property;
        });

    const prop = useSelector((state) => {
        return state.properties.property;
    });

    return (
        <>
            <View style={styles.priceContainer}>
                <View style={styles.priceTag}>
                    <Ionicons
                        name="ios-pricetags-outline"
                        size={24}
                        color={Color.primary}
                    />
                </View>
                <View>
                    <BodyS style={styles.rentText}>Rent per month</BodyS>
                    <HeadingM>
                        <HeadingS>TZS </HeadingS>
                        {addComma(rentPerMonth)}
                    </HeadingM>
                </View>
            </View>

            <View style={styles.bedBathContainer}>
                {propertyType !== "room" && (
                    <View style={styles.bathContainer}>
                        <Body style={styles.numberText}>
                            {roomCount.bathroom}
                        </Body>

                        <Caption style={styles.label}>Bath</Caption>
                    </View>
                )}

                {propertyType !== "room" && (
                    <View style={styles.bathContainer}>
                        <Body style={styles.numberText}>
                            {roomCount.bedroom}
                        </Body>

                        <Caption style={styles.label}>Bed</Caption>
                    </View>
                )}
                {propertyType === "room" && (
                    <View style={styles.roomTypeContainer}>
                        <Body style={styles.floorTypeText}>
                            {roomType.replace("-", " ")}
                        </Body>

                        <Caption style={styles.label}>Room</Caption>
                    </View>
                )}

                <View style={styles.bathContainer}>
                    <Body style={styles.floorTypeText}>{floorType}</Body>

                    <Caption style={styles.label}>Floor</Caption>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.black,
        width: "100%",
        height: "60%",
        opacity: 0.4,
    },
    priceContainer: {
        flexDirection: "row",
        // alignItems: "center",
        width: "100%",
        // backgroundColor: Color.lightblue,
        // justifyContent: "space-between",
        padding: 10,
    },
    rentText: {
        // fontWeight: "bold",
        color: Color.dimblack,
    },
    bedBathContainer: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-around",
    },
    bathContainer: {
        // flexDirection: "row",
        alignItems: "center",
        // borderRightWidth: 1,
        width: 80,
        // backgroundColor: Color.lightblue,
        // marginRight: 15,
        marginVertical: 5,
    },
    label: {
        marginLeft: 5,
        color: Color.dimblack,
    },
    dotSep: {
        marginHorizontal: 5,
    },
    priceTag: {
        backgroundColor: Color.lightgray,
        width: 50,
        aspectRatio: 1 / 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        borderTopLeftRadius: 10,
        marginRight: 15,
    },
    verticalIcon: {
        transform: [{ rotate: "90deg" }],
    },
    verticalLine: {
        width: 1,
        aspectRatio: 1 / 25,
        backgroundColor: Color.grey,
    },

    numberText: {
        fontWeight: "bold",
    },
    roomTypeContainer: {
        // flexDirection: "row",
        alignItems: "center",
        // borderRightWidth: 1,
        minWidth: 100,
        // backgroundColor: Color.lightblue,
        // marginRight: 15,
        marginVertical: 5,
    },
    floorTypeText: {
        fontWeight: "bold",
        textTransform: "capitalize",
    },
});

export { TopComp };
