import React from "react";
import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import Color from "../../../Components/Color";
import { Body, BodyS, Caption, HeadingS } from "../../../Components/Typography";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import {
    mapZoomVisibleReducer,
    propertyFeaturesVisibleReducer,
} from "../../../Redux/Features/PropertyDetails/PropertyDetailsModalSlice";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { LocationZoom } from "./LocationZoom";
import { LocationPin } from "./LocationPin";

function Location(props) {
    // use dispatch
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.propertyDetailsModal.mapZoomVisible;
    });

    const { propertyLocation } = useSelector((state) => {
        return state.properties.property;
    });

    const handleZoom = () => {
        dispatch(mapZoomVisibleReducer());

        return;
    };

    const handleOpenFeatures = () => {
        dispatch(propertyFeaturesVisibleReducer());

        return;
    };

    const coordinates = {
        latitude: propertyLocation.latitude,
        longitude: propertyLocation.longitude,
        latitudeDelta: 0.1822,
        longitudeDelta: 0.0421,
    };

    return (
        <>
            <View style={styles.container}>
                <HeadingS style={styles.titleText}>Location</HeadingS>

                <View style={styles.mapContainer}>
                    <MapView
                        region={{
                            latitude: propertyLocation.latitude,
                            longitude: propertyLocation.longitude,
                            latitudeDelta: 0.1822,
                            longitudeDelta: 0.0421,
                        }}
                        style={styles.map}
                        provider="google"
                        mapType="standard"
                        showsCompass={false}
                        rotateEnabled={true}
                    >
                        <Marker
                            coordinate={coordinates}
                            draggable={false}
                            opacity={1}
                        >
                            <LocationPin />
                        </Marker>
                    </MapView>

                    {/* Zoom Button */}
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={handleZoom}
                        style={styles.zoomContainer}
                    >
                        <MaterialIcons
                            name="zoom-out-map"
                            size={28}
                            color={Color.black}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Modal visible={visible} animationType="fade">
                <LocationZoom />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        // padding: 8,
        // aspectRatio: 10 / 1.3,
        paddingHorizontal: 10,
        width: "90%",
        borderRadius: 8,
        paddingVertical: 10,
    },
    titleText: {
        fontWeight: "bold",
        color: Color.primary,
    },
    mapContainer: {
        // flex: 1,
    },
    map: {
        width: "100%",
        height: undefined,
        aspectRatio: 1 / 1,
        marginTop: 10,
        borderRadius: 20,
    },
    zoomContainer: {
        position: "absolute",
        top: 20,
        right: 20,
        backgroundColor: Color.white,
        padding: 2,
        borderRadius: 5,
        shadowColor: Color.black,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 3,
    },
});

export { Location };
