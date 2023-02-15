import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Color from "../../../../Components/Color";
import { Body, BodyS, Caption } from "../../../../Components/Typography";
import { Octicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";

const iconSize = 12;

function TenantDetail(props) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.transitContainer}>
                    <FontAwesome5
                        name="circle-notch"
                        size={iconSize}
                        color={Color.grey}
                    />
                    <View style={styles.verticalLine} />
                </View>

                <View>
                    <Caption style={styles.titleText}>{props.title}</Caption>
                    <Body>{props.value}</Body>
                </View>
            </View>
        </>
    );
}

function TenantDetailEnd(props) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.transitContainer}>
                    <View style={styles.endVerticalLine} />
                    <FontAwesome5
                        name="circle-notch"
                        size={iconSize}
                        color={Color.grey}
                    />
                </View>

                <View>
                    <Caption style={styles.titleText}>{props.title}</Caption>
                    <Body style={styles.statusText}>{props.value}</Body>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // alignItems: "center",
        // marginLeft: 15,
        // marginTop: 10,
    },
    detailIcon: {
        marginRight: 25,
    },
    verticalLine: {
        width: 2,
        aspectRatio: 1 / 25,
        backgroundColor: Color.grey,
    },
    transitContainer: {
        // backgroundColor: Color.lightblue,
        alignItems: "center",
        marginRight: 30,
    },
    titleText: {
        color: Color.dimblack,
    },
    endVerticalLine: {
        width: 2,
        aspectRatio: 1 / 10,
        backgroundColor: Color.grey,
    },
    statusText: {
        color: Color.primary,
    },
});

export { TenantDetail, TenantDetailEnd };
