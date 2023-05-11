import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../../Components/Color";
import { useDispatch } from "react-redux";
// @ts-expect-error TS(2307): Cannot find module '../../../Redux/Features/Proper... Remove this comment to see the full error message
import { registerTenantVisibleReducer } from "../../../Redux/Features/PropertyDetails/PropertyDetailsModalSlice";
import { Sheet } from "../../../Components/Sheet";
import { RegisterTenantForm } from "./RegiesterTenantForm";

function RegisterTenant(props: any) {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(registerTenantVisibleReducer());

        return;
    };

    // renders
    return (
        <>
            <Sheet
                title="Register tenant"
                maxSnap="99%"
                handleClose={handleClose}
            >
                <RegisterTenantForm />
            </Sheet>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "grey",
    },
    contentContainer: {
        flex: 1,
        // marginHorizontal: 15,
        // alignItems: "center",
        // backgroundColor: Color.lightblue,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1.5,
        paddingHorizontal: 15,
        paddingBottom: 5,
        borderBottomColor: Color.lightgray,
    },
    featuresText: {
        // fontWeight: "bold",
    },
    indicatorStyle: {
        backgroundColor: Color.grey,
    },
    scrollcontainer: {
        paddingBottom: 50,
        paddingHorizontal: 10,
    },
});

export { RegisterTenant };
