import * as Location from "expo-location";
import { Platform } from "react-native";
import Constants from "expo-constants";

// Reading location from native device gps.
async function getGpsLocation() {
    if (Platform.OS === "android" && !Constants.isDevice) {
        setErrorMsg(
            "Oops, this will not work on Snack in an Android emulator. Try it on your device!"
        );

        return;
    }

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");

        return;
    }

    let location = await Location.getCurrentPositionAsync({});

    return location;
}

export { getGpsLocation };
