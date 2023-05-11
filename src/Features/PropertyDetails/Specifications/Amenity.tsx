import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import Color from "../../../Components/Color";
import { Caption } from "../../../Components/Typography";

function Amenity(props: any) {
    const dispatch = useDispatch();

    return (
        <>
            <View style={styles.container}>
                {props.children}
                <Caption style={styles.amenityLabel}>{props.label}</Caption>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    amenityLabel: {
        color: Color.black,
        marginTop: 3,
        fontWeight: "bold",
    },
    container: {
        alignItems: "center",
        padding: 10,
        width: "33.3%",
        aspectRatio: 1 / 1,
        justifyContent: "center",
    },
});

export { Amenity };
