import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../Components/Color";
import { Body } from "../../Components/Typography";
import { Octicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

function PropertyName(props: any) {
    const { propetyName, propertyLocation } = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.properties.property;
    });

    return <>
        <View style={styles.detailContainer}>
            <View style={styles.propertyNameContainer}>
                <Body>{propetyName}</Body>
            </View>

            <View style={styles.locationContainer}>
                <Octicons
                    name="location"
                    size={18}
                    color={Color.dimblack}
                    style={styles.locationIcon}
                />

                <Body style={styles.locationText}>
                    {propertyLocation.ward},{" "}
                    {propertyLocation.district.replace(/Municipal/gi, "")}
                </Body>
            </View>
        </View>
    </>;
}

const styles = StyleSheet.create({
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    locationIcon: {
        marginRight: 10,
    },
    locationText: {
        color: Color.dimblack,
    },
    detailContainer: {
        // flexDirection: "row",
        marginHorizontal: 15,
        // alignItems: "center",
        // justifyContent: "space-between",
    },
    propertyNameContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export { PropertyName };
