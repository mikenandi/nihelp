import React from "react";
import { StyleSheet, View, Image, Modal, TouchableOpacity } from "react-native";
import Color from "../../../Components/Color";
import { useDispatch, useSelector } from "react-redux";
import {
    avatarVisibleReducer,
    cropVisibleReducer,
} from "../../../Redux/Features/Account/AccountModalSlice";
import AvatarLibrary from "../../ImageLibrary/AvatarLibrary";
import {
    clearPhotos,
    clearSavedId,
} from "../../../Redux/Features/ImageLibrary/ImageSlice";
import { CropImg } from "./CropImg";
import { ModalNavBackWhite } from "../../../Components/ModalNavBack";

function SelectImg(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.accountModal.cropVisible;
    });

    const savedIds = useSelector((state) => {
        return state.imageLibrary.savedIds;
    });

    React.useEffect(() => {
        (() => {
            if (savedIds > 0) {
                dispatch(cropVisibleReducer());
                return;
            }
        })();
    }, []);

    const handleBack = () => {
        dispatch(clearPhotos());
        dispatch(avatarVisibleReducer());
        return;
    };

    return (
        <>
            <ModalNavBackWhite title="Select image" handleBack={handleBack} />

            <AvatarLibrary />

            <Modal visible={visible} animationType="fade" transparent={false}>
                <CropImg />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    topBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 8,
        // backgroundColor: Color.lightgray,
    },
    cancel: {
        // backgroundColor: Color.lightgray,
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        // borderRadius: 50,
        marginRight: 10,
    },
    headerText: {
        color: Color.dimblack,
    },
});

export { SelectImg };
