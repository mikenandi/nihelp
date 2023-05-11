import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../../Components/Color";
import { HeadingS, Body } from "../../../Components/Typography";
import { ButtonL } from "../../../Components/Buttons";
import { Fontisto } from "@expo/vector-icons";

function Gender(props) {
    return (
        <>
            <View style={styles.container}>
                <HeadingS style={styles.nameText}>Gender</HeadingS>

                <View style={styles.genderContainer}>
                    <View style={styles.genderBox}>
                        <Fontisto
                            name="female"
                            size={50}
                            color={Color.dimblack}
                        />
                        <Body>Female</Body>
                    </View>
                    <View style={styles.genderBox}>
                        <Fontisto
                            name="male"
                            size={50}
                            color={Color.dimblack}
                        />
                        <Body>Male</Body>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <ButtonL action="next" style={styles.button} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // alignItems: "center",
    },
    nameText: {
        marginLeft: 20,
        marginTop: 10,
        color: Color.primary,
        // alignText: "center",
        // textAlign: "center",
    },
    button: {
        marginTop: 25,
        // backgroundColor:
    },
    genderBox: {
        alignItems: "center",
        width: "35%",
        borderWidth: 1,
        borderRadius: 10,
        aspectRatio: 10 / 10,
        justifyContent: "center",
        borderColor: Color.grey,
    },
    genderContainer: {
        flexDirection: "row",
        width: "100%",
        // backgroundColor: Color.lightblue,
        alignItems: "center",
        marginTop: 15,
        justifyContent: "space-evenly",
    },
    buttonContainer: {
        alignItems: "center",
    },
});

export { Gender };
