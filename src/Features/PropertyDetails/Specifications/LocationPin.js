import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../../Components/Color";
import { useDispatch } from "react-redux";

import { Feather } from "@expo/vector-icons";

function LocationPin(props) {
    const dispatch = useDispatch();

    return (
        <>
            <View style={styles.locationPin}>
                <Feather name="home" size={18} color={Color.white} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    locationPin: {
        backgroundColor: Color.primary,
        borderRadius: 80,
        // width: 120,
        // aspectRatio: 10 / 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 2,
    },
});

export { LocationPin };
