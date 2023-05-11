import React from "react";
import { Modal, StyleSheet } from "react-native";
import Color from "../../../Components/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { useDispatch, useSelector } from "react-redux";
import { editBirthdateVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { EditBirthdate } from "../EditProfile/EditBirthdate";

function Birthdate(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.editProfileModal.editBirthdateVisible;
    });

    const { birthdate } = useSelector((state) => {
        return state.profileDetail;
    });

    const handleEdit = () => {
        dispatch(editBirthdateVisibleReducer());
        return;
    };

    return (
        <>
            <ProfileDetail
                label="Birthdate"
                detail={birthdate || "birthdate"}
                onEdit={handleEdit}
            >
                <MaterialIcons
                    name="insert-invitation"
                    size={24}
                    color={Color.primary}
                />
            </ProfileDetail>

            <Modal visible={visible} animationType="fade" transparent={false}>
                <EditBirthdate />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Birthdate };
