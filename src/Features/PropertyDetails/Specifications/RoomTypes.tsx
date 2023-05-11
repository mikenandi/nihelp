import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../../Components/Color";
import { Body } from "../../../Components/Typography";
import { Amenity } from "./Amenity";
import { AmenityTitle } from "./AmenityTitle";

function RoomTypes(props) {
    const dispatch = useDispatch();

    const { roomsAvailable } = useSelector((state) => {
        return state.properties.property;
    });

    return (
        <>
            <AmenityTitle title="Interior spaces" />
            <View style={styles.container}>
                <View style={styles.amenityContainer}>
                    {roomsAvailable.living_room && (
                        <Amenity label="Living room">
                            <Image
                                source={require("../../../../assets/flaticons/living-room.png")}
                                style={styles.imageSize}
                            />
                        </Amenity>
                    )}

                    {roomsAvailable.kitchen && (
                        <Amenity label="kitchen">
                            <Image
                                source={require("../../../../assets/flaticons/kitchen.png")}
                                style={styles.imageSize}
                            />
                        </Amenity>
                    )}

                    {roomsAvailable.dinning && (
                        <Amenity label="Dining">
                            <Image
                                source={require("../../../../assets/flaticons/restaurant.png")}
                                style={styles.imageSize}
                            />
                        </Amenity>
                    )}

                    {roomsAvailable.masterbed_room && (
                        <Amenity label="Master bedroom">
                            <Image
                                source={require("../../../../assets/flaticons/bedroom.png")}
                                style={styles.imageSize}
                            />
                        </Amenity>
                    )}

                    {roomsAvailable.laundry && (
                        <Amenity label="Laudry">
                            <Image
                                source={require("../../../../assets/flaticons/laundry-machine.png")}
                                style={styles.imageSize}
                            />
                        </Amenity>
                    )}

                    {roomsAvailable.basement && (
                        <Amenity label="Basement">
                            <Image
                                source={require("../../../../assets/flaticons/basement.png")}
                                style={styles.imageSize}
                            />
                        </Amenity>
                    )}

                    {roomsAvailable.garage && (
                        <Amenity label="Garage">
                            <Image
                                source={require("../../../../assets/flaticons/garage.png")}
                                style={styles.imageSize}
                            />
                        </Amenity>
                    )}

                    {roomsAvailable && (
                        <Amenity label="Closet">
                            <Image
                                source={require("../../../../assets/flaticons/wardrobe.png")}
                                style={styles.imageSize}
                            />
                        </Amenity>
                    )}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // justifyContent: "center",
    },
    amenityContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
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
        marginLeft: 20,
        marginTop: 20,
        // fontWeight: "bold",
        // color: Color.dimblack,
    },
});

export { RoomTypes };
