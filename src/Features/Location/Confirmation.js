import * as React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Color from "../../Components/Color";
import { HeadingS, Body, BodyS } from "../../Components/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../Components/Card";
import { getLocationData } from "../../Api/Services/OpenStreetMap/Requests";
import { TextButton } from "../../Components/Buttons";
import { confirmLocationReducer } from "../../Redux/Features/Location/locationModalSlice";
import { ErrorMsg } from "../../Components/ErrorMsg";
import { errorMsg } from "../../Redux/Components/ErrorMsgSlice";
import {
    confirmStatusReducer,
    locationDataReducer,
} from "../../Redux/Features/Location/locationSlice";

function LocationConfirmation() {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = React.useState(true);

    const coordinates = useSelector((state) => {
        return state.location.coordinates;
    });

    const address = useSelector((state) => {
        return state.location.address;
    });

    React.useEffect(() => {
        (async () => {
            let response = await getLocationData(coordinates);

            if (response.code === "ERR_NETWORK") {
                setIsLoading(false);

                dispatch(errorMsg("No internet connection on your device"));

                return;
            }
            setIsLoading(false);
            dispatch(locationDataReducer(response.address));

            return;
        })();

        return () => {
            setIsLoading(false);
        };
    }, []);

    const handleConfirm = () => {
        dispatch(confirmLocationReducer());
        dispatch(confirmStatusReducer());

        return;
    };

    // canceling it
    const handleCancel = () => {
        dispatch(confirmLocationReducer());

        return;
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.transparentContainer} />

                <Card style={styles.locationDataContainer}>
                    {!isLoading && (
                        <HeadingS style={styles.titleText}>
                            Property location
                        </HeadingS>
                    )}

                    <ErrorMsg />

                    {isLoading && (
                        <>
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator
                                    size={36}
                                    color={Color.primary}
                                    animating={isLoading}
                                />
                                <Body style={styles.loadingText}>
                                    Loading ...
                                </Body>
                            </View>
                        </>
                    )}

                    {!isLoading && (
                        <>
                            {/* Region */}
                            {!!address.region && (
                                <View style={styles.dataContainer}>
                                    <BodyS style={styles.dataLabel}>
                                        Region
                                    </BodyS>
                                    <Body>{address.city}</Body>
                                </View>
                            )}

                            {/* District */}
                            {!!address.district && (
                                <View style={styles.dataContainer}>
                                    <BodyS style={styles.dataLabel}>
                                        District
                                    </BodyS>
                                    <Body>{address.district}</Body>
                                </View>
                            )}

                            {/* Ward */}
                            {!!address.ward && (
                                <View style={styles.dataContainer}>
                                    <BodyS style={styles.dataLabel}>Ward</BodyS>
                                    <Body>{address.ward}</Body>
                                </View>
                            )}

                            {/* Street */}
                            {!!address.street && (
                                <View style={styles.dataContainer}>
                                    <BodyS style={styles.dataLabel}>
                                        Street
                                    </BodyS>
                                    <Body>{address.street}</Body>
                                </View>
                            )}

                            {/* House number */}
                            {!!address.houseNumber && (
                                <View style={styles.dataContainer}>
                                    <BodyS style={styles.dataLabel}>
                                        House no
                                    </BodyS>
                                    <Body>{address.houseNumber}</Body>
                                </View>
                            )}

                            <View style={styles.buttonsAlignContainer}>
                                <View style={styles.buttonsContainer}>
                                    <TextButton
                                        action="Nope"
                                        onPress={handleCancel}
                                        textStyle={styles.noBtn}
                                    />
                                    <TextButton
                                        action="Yes, it's correct"
                                        onPress={handleConfirm}
                                    />
                                </View>
                            </View>
                        </>
                    )}
                </Card>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: Color.black,
        // position: "absolute",
        // width: "100%",
        // height: "100%",
        // opacity: 0.4,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    locationDataContainer: {
        backgroundColor: Color.white,
        width: "85%",
        borderRadius: 16,
        borderTopLeftRadius: 2,
        padding: 15,
    },
    dataContainer: {
        flexDirection: "row",
        paddingVertical: 4,
    },
    dataLabel: {
        marginRight: 10,
        width: 60,
        color: Color.dimblack,
        marginLeft: 5,
    },
    titleText: {
        color: Color.dimblack,
        fontWeight: "bold",
        // marginLeft: 10,
        // textAlign: "center",
        marginBottom: 10,
    },
    buttonsAlignContainer: {
        alignItems: "flex-end",
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "90%",
    },
    noBtn: {
        color: Color.dimblack,
        // fontWeight: "normal",
    },
    loadingContainer: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
    },
    loadingText: {
        marginLeft: 25,
        color: Color.dimblack,
    },
    transparentContainer: {
        backgroundColor: Color.black,
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: 0.3,
    },
});

export default LocationConfirmation;
