import React from "react";
import { StyleSheet, View, Image, Modal, TouchableOpacity } from "react-native";
import { HeadingS, Body } from "../../../Components/Typography";
import Color from "../../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import AvatarLibrary from "../../ImageLibrary/AvatarLibrary";
import { avatarVisibleReducer } from "../../../Redux/Features/Account/AccountModalSlice";
import { SelectImg } from "./SelectImg";

function EditImg(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.accountModal.avatarVisible;
    });

    // console.log(visible);

    const handleAvatar = () => {
        dispatch(avatarVisibleReducer());
        return;
    };

    const { imgUrl } = useSelector((state) => {
        return state.profileDetail;
    });

    return (
        <>
            <View style={styles.container}>
                {!!imgUrl ? (
                    <Image
                        // source={require("../../../../assets/img/tenant.jpeg")}
                        source={{ uri: imgUrl }}
                        style={styles.avatar}
                    />
                ) : (
                    <View>
                        <Ionicons
                            name="md-person-circle-outline"
                            size={120}
                            color={Color.grey}
                        />
                    </View>
                )}

                <TouchableOpacity
                    onPress={handleAvatar}
                    activeOpacity={0.85}
                    style={styles.cameraIcon}
                >
                    <Ionicons
                        name="ios-camera-outline"
                        size={28}
                        color={Color.primary}
                    />
                </TouchableOpacity>
            </View>

            <Modal visible={visible} animationType="fade" transparent={false}>
                <SelectImg />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: "90%",
        height: undefined,
        aspectRatio: 10 / 10,
        borderRadius: 200,
        backgroundColor: Color.lightgray,
    },
    cameraIcon: {
        backgroundColor: Color.lightgray,
        width: 45,
        aspectRatio: 10 / 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        position: "absolute",
        right: 0,
        bottom: 15,
        // borderWidth: 2,
        // borderColor: Color.white,
    },
    container: {
        // backgroundColor: Color.lightblue,
        alignItems: "center",
        width: "40%",
        aspectRatio: 10 / 10,
    },
});

export { EditImg };
