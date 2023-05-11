import React from "react";
import { View, StyleSheet } from "react-native";
import Color from "./Color";

function Card(props: any) {
    return (
        <>
            <View style={{ ...styles.card, ...props.style }}>
                {props.children}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Color.white,
        shadowColor: Color.black,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 3,
        borderRadius: 1,
    },
});

export { Card };
