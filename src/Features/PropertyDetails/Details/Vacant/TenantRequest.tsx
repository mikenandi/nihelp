import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import Color from "../../../../Components/Color";
import { Body, HeadingS } from "../../../../Components/Typography";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { registerTenantVisibleReducer } from "../../../../Redux/Features/PropertyDetails/PropertyDetailsModalSlice";
import { tenantRequestVisibleReducer } from "../../../../Redux/Features/TenantRequests/TenantRequestsModalSlice";
import { TenantRequests } from "../../../TenantRequests";

function TenantRequest(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.tenantRequestModal.tenantRequestVisible;
    });

    const handleTenantRequests = () => {
        dispatch(tenantRequestVisibleReducer());

        return;
    };

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleTenantRequests}
            >
                <View style={styles.container}>
                    <View style={styles.vacantContainer}>
                        <AntDesign
                            name="contacts"
                            size={32}
                            color={Color.primary}
                        />
                    </View>

                    <View style={styles.textContainer}>
                        <HeadingS>Property Tours</HeadingS>
                        <Body style={styles.offersCount}>0 viewed</Body>
                    </View>
                </View>
            </TouchableOpacity>

            <Modal visible={visible} transparent={false} animationType="fade">
                <TenantRequests />
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
        // fontWeight: "bold",
        color: Color.warning,
    },
    vacantContainer: {
        backgroundColor: Color.lightgray,
        padding: 16,
        borderRadius: 16,
        borderTopLeftRadius: 1,
    },
});

export { TenantRequest };
