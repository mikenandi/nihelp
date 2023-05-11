import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import Color from "../../../../Components/Color";
import { Body } from "../../../../Components/Typography";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module '../../../../Redux/Features/Pro... Remove this comment to see the full error message
import { registerTenantVisibleReducer } from "../../../../Redux/Features/PropertyDetails/PropertyDetailsModalSlice";
// @ts-expect-error TS(2307): Cannot find module '../../../../Redux/Features/Pro... Remove this comment to see the full error message
import { propertyTourVisibleReducer } from "../../../../Redux/Features/PropertyTour/PropertyTourModalSlice";
// @ts-expect-error TS(2307): Cannot find module '../../../PropertyTours' or its... Remove this comment to see the full error message
import { PropertyTours } from "../../../PropertyTours";

function PropertyTour(props: any) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.propertyTourModal.propertyTourVisible;
    });

    const handlePropertyTour = () => {
        dispatch(propertyTourVisibleReducer());

        return;
    };

    return (
        <>
            <TouchableOpacity activeOpacity={0.85} onPress={handlePropertyTour}>
                <View style={styles.container}>
                    <View style={styles.vacantContainer}>
                        <AntDesign
                            name="contacts"
                            size={28}
                            color={Color.primary}
                        />
                    </View>

                    <View style={styles.textContainer}>
                        <Body>Property tour</Body>
                        <Body style={styles.offersCount}>0 bookings</Body>
                    </View>
                </View>
            </TouchableOpacity>

            <Modal visible={visible} animationType="fade" transparent={false}>
                <PropertyTours />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
    },
    textContainer: {
        marginLeft: 20,
    },
    offersCount: {
        color: Color.grey,
    },
    newText: {
        fontWeight: "bold",
        color: Color.warning,
    },
    vacantContainer: {
        backgroundColor: Color.lightgray,
        padding: 8,
        borderRadius: 5,
    },
});

export { PropertyTour };
