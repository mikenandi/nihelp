import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { HeadingS, BodyS, Body } from "../../Components/Typography";
import Color from "../../Components/Color";
import { useDispatch } from "react-redux";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Card } from "../../Components/Card";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Faq(props: any) {
    const dispatch = useDispatch();

    const [contentVisible, setContentVisible] = React.useState(false);

    return (
        <>
            <View style={styles.container}>
                {/* title container */}
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => {
                        setContentVisible(!contentVisible);
                    }}
                >
                    <View
                        style={{
                            ...styles.topContainer,
                            paddingBottom: contentVisible ? 0 : 10,
                        }}
                    >
                        <HeadingS style={styles.titleText}>{props.Q}</HeadingS>
                        {contentVisible ? (
                            <Ionicons
                                name="chevron-down"
                                size={18}
                                color={Color.grey}
                            />
                        ) : (
                            <Ionicons
                                name="chevron-forward"
                                size={18}
                                color={Color.grey}
                            />
                        )}
                    </View>
                </TouchableOpacity>

                {/* content container */}
                {contentVisible && (
                    <View style={styles.contentContainer}>
                        {/* <MaterialCommunityIcons
                            name="source-commit-next-local"
                            size={24}
                            color={Color.primary}
                        /> */}
                        <MaterialCommunityIcons
                            name="lightbulb-on"
                            size={20}
                            color={Color.primary}
                        />
                        <Body style={styles.contentText}>{props.A}</Body>
                    </View>
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        // backgroundColor: Color.lightgray,
        width: "90%",
        marginTop: 20,
        // borderRadius: 10,
        // borderBottomStartRadius: 20,
        borderBottomWidth: 1.5,
        borderBottomColor: Color.lightgray,
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    contentContainer: {
        padding: 10,
        flexDirection: "row",
    },
    titleText: {
        width: "96%",
        // backgroundColor: Color.lightblue,
        fontWeight: "bold",
        color: Color.primary,
        // fontFamily: "poppins",
        fontSize: 18,
    },
    contentText: {
        // color: Color.grey,
        // fontFamily: "poppins",
        // fontSize: 16,
        width: "97%",
        // fontWeight: "bold",
    },
});

export { Faq };
