import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../Components/Color";
import { Body, HeadingS, HeadingM, BodyS } from "../../Components/Typography";
import { addComma } from "../../Helpers/StringFormater";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

function Insight(props: any) {
    return (
        <>
            <View style={styles.container}>
                <HeadingS style={styles.infoText}>Overviews </HeadingS>
                <View style={styles.rowContainer}>
                    <View style={styles.circleContainer}>
                        <MaterialCommunityIcons
                            name="bank-plus"
                            size={28}
                            color={Color.primary}
                        />
                    </View>
                    <View>
                        <HeadingS>
                            <Body>TZS</Body> 100m
                        </HeadingS>

                        <Body style={styles.labelText}>Rent +</Body>
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.circleContainer}>
                        <MaterialCommunityIcons
                            name="bank-minus"
                            size={28}
                            color={Color.error}
                        />
                    </View>
                    <View>
                        <HeadingS>
                            <Body>TZS</Body> 100m
                        </HeadingS>
                        <Body style={styles.labelText}>Expenses</Body>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.white,
        paddingLeft: 25,
        marginTop: 10,
    },
    circleContainer: {
        borderWidth: 1.5,
        width: 60,
        aspectRatio: 10 / 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderColor: Color.lightgray,
        marginRight: 25,
        borderTopLeftRadius: 2,
        backgroundColor: Color.lightgray,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
    },
    labelText: {
        color: Color.dimblack,
        // fontWeight: "bold",
    },
    infoText: {
        color: Color.grey,
        // fontWeight: "bold",
        marginBottom: 10,
    },
});

export { Insight };
