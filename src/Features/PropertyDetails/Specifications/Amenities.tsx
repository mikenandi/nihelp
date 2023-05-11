import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../../Components/Color";
import { Amenity } from "./Amenity";
import {
    MaterialCommunityIcons,
    Ionicons,
    FontAwesome5,
} from "@expo/vector-icons";
import { AmenityTitle } from "./AmenityTitle";

function Amenities(props) {
    const dispatch = useDispatch();

    const { amenities } = useSelector((state) => {
        return state.properties.property;
    });

    return (
        <>
            {/* <AvailableFeatures title="Amenities" /> */}
            <AmenityTitle title="Amenities" />

            <View style={styles.amenityContainer}>
                {amenities.electricity && (
                    <Amenity label="Electricity">
                        <MaterialCommunityIcons
                            name="lightbulb-on-outline"
                            size={40}
                            color={Color.dimblack}
                        />
                    </Amenity>
                )}

                {amenities.water && (
                    <Amenity label="Water">
                        <Ionicons
                            name="water-outline"
                            size={40}
                            color={Color.dimblack}
                        />
                    </Amenity>
                )}

                {amenities.air_conditioner && (
                    <Amenity label="Air condition">
                        <Image
                            source={require("../../../../assets/flaticons/air-conditioner.png")}
                            style={styles.imageSize}
                        />
                    </Amenity>
                )}

                {amenities.ceiling_fan && (
                    <Amenity label="Fan">
                        <MaterialCommunityIcons
                            name="ceiling-fan"
                            size={40}
                            color={Color.dimblack}
                        />
                    </Amenity>
                )}

                {amenities.parking && (
                    <Amenity label="Parking">
                        <MaterialCommunityIcons
                            name="parking"
                            size={40}
                            color={Color.dimblack}
                        />
                    </Amenity>
                )}

                {amenities.swiming_pool && (
                    <Amenity label="Pool">
                        <FontAwesome5
                            name="swimming-pool"
                            size={40}
                            color={Color.dimblack}
                        />
                    </Amenity>
                )}

                {amenities.security_guard && (
                    <Amenity label="Security">
                        <Image
                            source={require("../../../../assets/flaticons/guard.png")}
                            style={styles.imageSize}
                        />
                    </Amenity>
                )}

                {amenities.fire_alarm && (
                    <Amenity label="Fire alarm">
                        <MaterialCommunityIcons
                            name="firewire"
                            size={40}
                            color={Color.dimblack}
                        />
                    </Amenity>
                )}

                {amenities.electric_fence && (
                    <Amenity label="Electric fence">
                        <MaterialCommunityIcons
                            name="fence-electric"
                            size={40}
                            color={Color.dimblack}
                        />
                    </Amenity>
                )}
                {amenities.cctv_camera && (
                    <Amenity label="CCTV camera">
                        <MaterialCommunityIcons
                            name="cctv"
                            size={40}
                            color={Color.dimblack}
                        />
                    </Amenity>
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "90%",
        paddingHorizontal: 10,
        alignItems: "center",
        marginTop: 20,
    },
    bathContainer: {
        // flexDirection: "row",
        // alignItems: "center",
    },
    label: {
        marginLeft: 5,
        color: Color.black,
        fontWeight: "bold",
    },
    dotSep: {
        marginHorizontal: 10,
    },
    floorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        marginLeft: 15,
    },
    amenityContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        // alignItems: "center",
        // justifyContent: "center",
    },
    amenityLabel: {
        color: Color.dimblack,
    },
    amenity: {
        alignItems: "center",
        padding: 10,
    },
    imageSize: {
        width: 40,
        height: undefined,
        aspectRatio: 1 / 1,
    },
    titleText: {
        // marginLeft: 20,
        // marginTop: 20,
        // fontWeight: "bold",
        // color: Color.dimblack,
    },
    horizontalLine: {
        width: 30,
        height: 3.5,
        backgroundColor: Color.primary,
        borderRadius: 10,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
    },
    outsideContainer: {
        alignItems: "center",
    },
});

export { Amenities };
