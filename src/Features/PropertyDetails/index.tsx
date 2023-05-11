import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import Color from "../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { PropertyImg } from "./PropertyImg";
import { Details } from "./Details";

function PropertyDetails(props) {
    const dispatch = useDispatch();

    const propertyDetails = useSelector((state) => {
        return state.properties.property;
    });

    // console.log(propertyDetails);

    return (
        <>
            <ModalScreenWhite>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <PropertyImg />

                    <Details />
                </ScrollView>
            </ModalScreenWhite>
        </>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 40,
    },
});

export { PropertyDetails };
