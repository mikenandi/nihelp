import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import Color from "../../Components/Color";
import { HeadingS } from "../../Components/Typography";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module '../../Redux/Features/PropertyD... Remove this comment to see the full error message
import { registerTenantVisibleReducer } from "../../Redux/Features/PropertyDetails/PropertyDetailsModalSlice";
import { RegisterTenant } from "./RegisterTenant";

function RegisterTenantButton(props: any) {
    // use dispatch
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.propertyDetailsModal.registerTenantVisible;
    });

    const handleOpenFeatures = () => {
        dispatch(registerTenantVisibleReducer());
        return;
    };

    // console.log(visible);
    return (
        <>
            <TouchableOpacity activeOpacity={0.8} onPress={handleOpenFeatures}>
                <View style={styles.container}>
                    <View style={styles.button}>
                        <HeadingS>Add tenant</HeadingS>

                        <FontAwesome
                            name="user-plus"
                            size={34}
                            color={Color.primary}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <Modal transparent={true} animationType="none" visible={visible}>
                <RegisterTenant />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // paddingHorizontal: 10,
        width: "100%",
        borderTopWidth: 2,
        borderTopColor: Color.lightgray,
    },
    button: {
        backgroundColor: Color.lightgray,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 15,
        // paddingHorizontal: 20,
        aspectRatio: 10 / 2.5,
        paddingHorizontal: 15,
        width: "90%",
        borderRadius: 10,
        marginTop: 25,
    },
});

export { RegisterTenantButton };
