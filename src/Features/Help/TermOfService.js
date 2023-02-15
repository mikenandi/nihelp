import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { HeadingS, BodyS, Body } from "../../Components/Typography";
import Color from "../../Components/Color";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "../../Components/Card";
import { Entypo, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TermOfService(props) {
    const dispatch = useDispatch();

    const [contentVisible, setContentVisible] = React.useState(false);

    return (
        <>
            <View style={styles.container}>
                {/* title container */}

                {!!props.title && (
                    <View
                        style={{
                            ...styles.topContainer,
                            paddingBottom: contentVisible ? 0 : 10,
                        }}
                    >
                        <Body style={styles.titleText}>
                            {props.title.replace(/Rentify/gi, "Lentify")}
                            {!!props.date && (
                                <Body style={styles.date}>{props.date}</Body>
                            )}
                        </Body>
                    </View>
                )}

                {/* content container */}

                <View style={styles.contentContainer}>
                    <Body style={styles.contentText}>
                        {props.description.replace(/Rentify/gi, "Lentify")}
                    </Body>
                    {!!props.note && (
                        <Body style={{ ...styles.date, fontWeight: "bold" }}>
                            {props.note.replace(/Rentify/gi, "Lentify")}
                        </Body>
                    )}
                </View>
            </View>
        </>
    );
}

function Use(props) {
    const dispatch = useDispatch();

    const [contentVisible, setContentVisible] = React.useState(false);

    return (
        <>
            {/* content container */}

            <View style={styles.useContainer}>
                <Octicons
                    name="dot-fill"
                    size={10}
                    color={Color.primary}
                    style={styles.icon}
                />
                <Body style={styles.useText}>{props.description}</Body>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        // backgroundColor: Color.lightgray,
        width: "97%",
        marginTop: 10,
        marginBottom: 15,
        // borderRadius: 10,
        // borderBottomStartRadius: 20,
        // borderBottomWidth: 1.5,
        // borderBottomColor: Color.lightgray,
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        // paddingTop: 10,
        // backgroundColor: Color.lightblue,
    },
    contentContainer: {
        paddingHorizontal: 10,
        // flexDirection: "row",
        // backgroundColor: Color.lightred,
    },
    titleText: {
        width: "95%",
        // backgroundColor: Color.lightblue,
        fontWeight: "bold",
        // color: "#0d0d0d",
        // fontFamily: "poppins",
        // fontSize: 18,
    },
    contentText: {
        color: Color.dimblack,
        // fontFamily: "poppins",
        // fontSize: 16,
        width: "97%",
        color: "#0d0d0d",
    },
    date: {
        color: Color.primary,
        fontWeight: "normal",
    },
    useContainer: {
        paddingHorizontal: 10,
        flexDirection: "row",
        // backgroundColor: Color.lightred,
        // alignItems: "center",
        width: "95%",
        marginBottom: 5,
    },
    useText: {
        color: Color.dimblack,
        // fontFamily: "poppins",
        // fontSize: 16,
        width: "97%",
        color: "#0d0d0d",
        marginLeft: 10,
    },
    icon: {
        marginTop: 5,
    },
});

export { TermOfService, Use };
