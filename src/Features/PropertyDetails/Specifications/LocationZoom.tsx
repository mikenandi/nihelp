import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Color from "../../../Components/Color";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import {
    mapZoomVisibleReducer,
    propertyFeaturesVisibleReducer,
} from "../../../Redux/Features/PropertyDetails/PropertyDetailsModalSlice";
import { Feather } from "@expo/vector-icons";
import { LocationPin } from "./LocationPin";

function LocationZoom(props) {
    const dispatch = useDispatch();

    const { propertyLocation } = useSelector((state) => {
        return state.properties.property;
    });

    const handleHideMap = () => {
        dispatch(mapZoomVisibleReducer());

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
                <View style={styles.mapContainer}>
                    <MapView
                        region={{
                            latitude: propertyLocation.latitude,
                            longitude: propertyLocation.longitude,
                            latitudeDelta: 0.0132,
                            longitudeDelta: 0.0041,
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
                    <TouchableOpacity
                        activeOpacity={0.85}
                        onPress={handleHideMap}
                        style={styles.zoomContainer}
                    >
                        <Feather name="x" size={28} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.lightgray,
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
        height: "100%",
    },
    zoomContainer: {
        position: "absolute",
        top: 20,
        left: 20,
        backgroundColor: Color.white,
        padding: 8,
        borderRadius: 50,
        shadowColor: Color.black,
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowRadius: 10,
        shadowOpacity: 0.8,
        elevation: 3,
    },
});

export { LocationZoom };
