import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import Color from "../../Components/Color";
import { ModalNavBackWhite } from "../../Components/ModalNavBack";
import { HeadingS } from "../../Components/Typography";
import { ModalScreenWhite } from "../../Layouts/ModalScreen";
import { notificationVisibleReducer } from "../../Redux/Features/Notification/NotificationModalSlice";
import { Notification } from "./Notification";

function Notifications(props) {
    const dispatch = useDispatch();

    const handleBack = () => {
        dispatch(notificationVisibleReducer());
        return;
    };
    if (true) {
        return (
            <>
                <ModalScreenWhite>
                    <ModalNavBackWhite
                        handleBack={handleBack}
                        title="Notifications"
                    />
                    <View style={styles.emptyContainer}>
                        <Image
                            source={require("../../../assets/img/notification-bg-2.png")}
                            style={styles.emptyNotifyImg}
                        />
                    </View>
                </ModalScreenWhite>
            </>
        );
    }

    return (
        <>
            <ModalScreenWhite>
                <ModalNavBackWhite
                    handleBack={handleBack}
                    title="Notifications"
                />
                <View style={styles.container}>
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                </View>
            </ModalScreenWhite>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    emptyNotifyImg: {
        width: "80%",
        height: undefined,
        aspectRatio: 10 / 10,
    },
});

export { Notifications };
