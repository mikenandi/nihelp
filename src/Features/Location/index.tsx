import * as React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions, Modal } from "react-native";
import { FAB } from "../../Components/FAB";
import { MaterialIcons } from "@expo/vector-icons";
import Color from "../../Components/Color";
import { getGpsLocation } from "../../Helpers/Location";
import { useDispatch, useSelector } from "react-redux";
import { currentCoordinatesReducer } from "../../Redux/Features/Location/locationSlice";
import { infoMsg } from "../../Redux/Components/ErrorMsgSlice";
import Confirmation from "./Confirmation";

function Location(props: any) {
    const dispatch = useDispatch();

    const coordinates = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.location.coordinates;
    });

    const visible = useSelector((state) => {
        // @ts-expect-error TS(2571): Object is of type 'unknown'.
        return state.locationModal.confirmVisible;
    });

    const handlePress = async () => {
        try {
            let response = await getGpsLocation();

            let coordinates = {
                // @ts-expect-error TS(2532): Object is possibly 'undefined'.
                latitude: response.coords.latitude,
                // @ts-expect-error TS(2532): Object is possibly 'undefined'.
                longitude: response.coords.longitude,
            };

            dispatch(currentCoordinatesReducer(coordinates));

            return;
        } catch (error) {
            dispatch(infoMsg("Turn on device location"));

            return;
        }
    };

    const handleMovePin = (e: any) => {
        let coordinates = {
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
        };

        dispatch(currentCoordinatesReducer(coordinates));

        return;
    };

    return (
        <>
            <View style={{ ...styles.container, ...props.style }}>
                <MapView
                    region={{
                        latitude: -6.772100165646068,
                        longitude: 39.22063551843166,
                        latitudeDelta: 0.1822,
                        longitudeDelta: 0.0421,
                    }}
                    style={styles.map}
                    provider="google"
                    mapType="standard"
                    showsCompass={true}
                    rotateEnabled={true}
                >
                    {/* Map marker */}
                    <Marker
                        coordinate={coordinates}
                        draggable={true}
                        onDragEnd={handleMovePin}
                        opacity={1}
                    />
                </MapView>

                <FAB onPress={handlePress} style={styles.fabButton}>
                    <MaterialIcons
                        name="gps-fixed"
                        size={32}
                        color={Color.dimblack}
                    />
                </FAB>
            </View>

            <Modal transparent={true} visible={visible} animationType="fade">
                <Confirmation />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 120,
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    fabButton: {
        backgroundColor: Color.white,
        borderRadius: 40,
        bottom: 60,
    },
});

export default React.memo(Location);
