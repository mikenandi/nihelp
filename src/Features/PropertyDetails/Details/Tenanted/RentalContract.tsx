import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Color from "../../../../Components/Color";
import {
    Body,
    BodyS,
    Caption,
    HeadingL,
} from "../../../../Components/Typography";
import { TenantDetail, TenantDetailEnd } from "./TenantDetail";

function RentalContract(props: any) {
    return (
        <>
            <View style={styles.line} />
            <View>
                <Body style={styles.tenantText}>Tenant</Body>
            </View>
            <View style={styles.imgContainer}>
                <View style={styles.leftContainer}>
                    <Image
                        source={require("../../../../../assets/img/tenant.jpeg")}
                        style={styles.avatar}
                    />

                    <HeadingL style={styles.remainedText}>12</HeadingL>
                    <Caption style={styles.timeLeft}>months</Caption>
                    {/* <Caption style={styles.timeLeft}>Remained</Caption> */}
                </View>

                {/* Contract detail  */}
                <View style={styles.tenantContainer}>
                    <TenantDetail title="Name" value="Tenant Name" />
                    {/* <TenantDetail title="Gender" value="Male" /> */}
                    {/* <TenantDetail title="Age" value="28 years" /> */}
                    <TenantDetail title="Monthly rent" value="Tzs 28000" />
                    <TenantDetail title="Amount paid" value="Tzs 298900" />
                    <TenantDetail title="Duration" value="6 Months" />
                    <TenantDetail title="Started on" value="01-01-2022" />
                    <TenantDetail title="Ends on" value="01-01-2022" />
                    <TenantDetailEnd title="Status" value="Paid rent" />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    line: {
        borderWidth: 1,
        borderColor: Color.lightgray,
    },
    avatar: {
        borderRadius: 100,
        width: "100%",
        height: undefined,
        aspectRatio: 10 / 10,
    },
    imgContainer: {
        flexDirection: "row",
        // alignItems: "center",
        marginLeft: 15,
        marginTop: 15,
    },
    tenantContainer: {
        marginLeft: 25,
    },
    tenantText: {
        marginLeft: 15,
        marginTop: 15,
    },
    leftContainer: {
        width: "15%",
    },
    remainedText: {
        color: Color.primary,
        marginTop: 20,
    },
    timeLeft: {
        color: Color.dimblack,
    },
});

export { RentalContract };
