import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Color from "../../../Components/Color";
import { PropertyName } from "../PropertyName";
import { FeaturesButton } from "../FeaturesButton";
import { RentalContract } from "./Tenanted/RentalContract";
import { RegisterTenantButton } from "../RegisterTenantButton";
import { RentalOffers } from "./Vacant/RentalOffers";

function Details(props: any) {
    return (
        <>
            <View style={styles.container}>
                <PropertyName />

                <FeaturesButton />

                {/* <RegisterTenantButton /> */}

                <RentalOffers />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 10,
        // marginLeft: 15,
    },
});

export { Details };
