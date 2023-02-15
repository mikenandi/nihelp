import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Color from "../../Components/Color";
import { Body, HeadingL } from "../../Components/Typography";

function Language(props) {
    return (
        <>
            <TouchableOpacity activeOpacity={0.85} onPress={props.onPress}>
                <View style={styles.container}>
                    <View
                        style={{
                            ...styles.boxLang,
                            backgroundColor: props.selected
                                ? Color.primary
                                : Color.lightgray,
                        }}
                    >
                        <HeadingL>
                            {props.language.toLowerCase().substring(0, 2)}
                        </HeadingL>
                    </View>
                    <Body>{props.language}</Body>
                </View>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginBottom: 15,
    },
    boxLang: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.lightgray,
        // marginBottom: 15,
        marginRight: 15,
        width: 60,
        aspectRatio: 1 / 1,
        borderRadius: 15,
    },
});

export { Language };
