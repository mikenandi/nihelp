import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../../Components/Color";
import { Ionicons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { EditName } from "../EditProfile/EditName";
import { useDispatch, useSelector } from "react-redux";
import { editNameVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";

function Name(props) {
    const dispatch = useDispatch();

    const name = useSelector((state) => {
        return state.profileDetail.name;
    });

    const visible = useSelector((state) => {
        return state.editProfileModal.editNameVisible;
    });

    const handleEdit = () => {
        dispatch(editNameVisibleReducer());
        return;
    };

    return (
        <>
            <ProfileDetail label="Name" detail={name} onEdit={handleEdit}>
                <Ionicons
                    name="person-outline"
                    size={24}
                    color={Color.primary}
                />
            </ProfileDetail>

            <Modal transparent={false} visible={visible} animationType="fade">
                <EditName />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Name };
