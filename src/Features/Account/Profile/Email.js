import React from "react";
import { Modal, StyleSheet } from "react-native";
import Color from "../../../Components/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { useDispatch, useSelector } from "react-redux";
import { editEmailVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { EditEmail } from "../EditProfile/EditEmail";

function Email(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.editProfileModal.editEmailVisible;
    });

    const email = useSelector((state) => {
        return state.profileDetail.email;
    });

    const handleEdit = () => {
        // dispatch(editEmailVisibleReducer());
        return;
    };

    return (
        <>
            <ProfileDetail label="Email" detail={email} onEdit={handleEdit}>
                <MaterialIcons
                    name="alternate-email"
                    size={24}
                    color={Color.primary}
                />
            </ProfileDetail>

            <Modal visible={visible} animationType="fade" transparent={false}>
                <EditEmail />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Email };
