import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { TenantRequest } from "./TenantRequest";

function RentalOffers(props: any) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.propertyDetailsModal.registerTenantVisible;
    });

    return (
        <>
            <View style={styles.container}>
                <TenantRequest />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        width: "100%",
        borderTopWidth: 2,
        borderTopColor: Color.lightgray,
    },
});

export { RentalOffers };
