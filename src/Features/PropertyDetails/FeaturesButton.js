import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import Color from "../../Components/Color";
import { BodyS } from "../../Components/Typography";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { propertyFeaturesVisibleReducer } from "../../Redux/Features/PropertyDetails/PropertyDetailsModalSlice";
import { Features } from "./Specifications";

function FeaturesButton(props) {
    // use dispatch
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.propertyDetailsModal.propertyFeaturesVisible;
    });

    const handleOpenFeatures = () => {
        dispatch(propertyFeaturesVisibleReducer());

        return;
    };

    return (
        <>
            <TouchableOpacity activeOpacity={0.8} onPress={handleOpenFeatures}>
                <View style={styles.container}>
                    <BodyS>Property Specifications</BodyS>

                    <Ionicons
                        name="ios-chevron-down-outline"
                        size={20}
                        color={Color.dimblack}
                    />
                </View>
            </TouchableOpacity>

            <Modal transparent={true} animationType="none" visible={visible}>
                <Features />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.lightgray,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 15,
        // padding: 8,
        aspectRatio: 10 / 1.3,
        paddingHorizontal: 10,
        width: "90%",
        borderRadius: 3,
    },
});

export { FeaturesButton };
