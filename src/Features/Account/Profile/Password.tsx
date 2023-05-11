import React from "react";
import { StyleSheet, Modal } from "react-native";
import Color from "../../../Components/Color";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ProfileDetail } from "./ProfileDetail";
import { useDispatch, useSelector } from "react-redux";
import { editPasswordVisibleReducer } from "../../../Redux/Features/Account/EditProfileModalSlice";
import { EditPassword } from "../EditProfile/EditPassword";

function Password(props) {
    const dispatch = useDispatch();

    const visible = useSelector((state) => {
        return state.editProfileModal.editPasswordVisible;
    });

    const password = useSelector((state) => {
        return state.profileDetail.password;
    });

    const handleEdit = () => {
        dispatch(editPasswordVisibleReducer());

        return;
    };

    // the following are comments
    return (
        <>
            <ProfileDetail
                label="Password"
                detail={password}
                onEdit={handleEdit}
            >
                <MaterialCommunityIcons
                    name="key"
                    size={24}
                    color={Color.primary}
                />
            </ProfileDetail>

            <Modal visible={visible} animationType="fade" transparent={false}>
                <EditPassword />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({});

export { Password };
